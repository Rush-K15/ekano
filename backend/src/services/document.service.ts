import crypto from "crypto";

import {
  createDocument,
  getAllDocuments,
  deleteDocumentById,
} from "../repositories/document.repository.js";
import { createDocumentChunk } from "../repositories/document-chunk.repository.js";
import { createEmbedding } from "./embedding.service.js";

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

  const savedDocument = await createDocument(document);

  const chunks = chunkText(content);

  for (let index = 0; index < chunks.length; index++) {
    const chunk = chunks[index];

    const embedding = await createEmbedding(chunk);

    await createDocumentChunk({
      id: crypto.randomUUID(),
      documentId: savedDocument.id,
      content: chunk,
      chunkIndex: index,
      embedding,
    });
  }

  return savedDocument;
}
