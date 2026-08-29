import crypto from "crypto";

import {
  createDocument,
  getAllDocuments,
  deleteDocumentById,
  createDocumentWithClient,
} from "../repositories/document.repository.js";
import {
  createDocumentChunk,
  createDocumentChunkWithClient,
} from "../repositories/document-chunk.repository.js";
import { createEmbedding } from "./embedding.service.js";
import { pool } from "../config/database.js";
import { chunkText } from "../utils/chunkText.js";

import type { Document } from "../types/document.types.js";

export async function getDocuments(): Promise<Document[]> {
  return getAllDocuments();
}

export async function removeDocument(id: string): Promise<boolean> {
  return deleteDocumentById(id);
}

export async function addDocument(
  title: string,
  content: string,
): Promise<Document> {
  const document: Document = {
    id: crypto.randomUUID(),
    title,
    content,
  };

  const chunks = chunkText(content);

  const preparedChunks = [];

  // External work first — no database changes yet.
  for (let index = 0; index < chunks.length; index++) {
    const chunk = chunks[index];

    const embedding = await createEmbedding(chunk);
    preparedChunks.push({
      id: crypto.randomUUID(),
      documentId: document.id,
      content: chunk,
      chunkIndex: index,
      embedding,
    });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const savedDocument = await createDocumentWithClient(client, document);

    for (const chunk of preparedChunks) {
      await createDocumentChunkWithClient(client, chunk);
    }

    await client.query("COMMIT");

    return savedDocument;
  } catch (error) {
    await client.query("ROLLBACK");

    throw error;
  } finally {
    client.release();
  }
}
