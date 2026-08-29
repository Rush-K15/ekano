import { pool } from "../config/database.js";
import type { PoolClient } from "pg";

type CreateDocumentChunk = {
  id: string;
  documentId: string;
  content: string;
  chunkIndex: number;
  embedding: number[];
};

export async function createDocumentChunk(chunk: CreateDocumentChunk) {
  const result = await pool.query(
    `
        INSERT INTO document_chunks (
            id,
            document_id,
            content,
            chunk_index,
            embedding
        )
        VALUES ($1, $2, $3, $4, $5::vector)
        RETURNING
            id,
            document_id,
            content,
            chunk_index,
            embedding
        `,
    [
      chunk.id,
      chunk.documentId,
      chunk.content,
      chunk.chunkIndex,
      `[${chunk.embedding.join(",")}]`,
    ],
  );

  return result.rows[0];
}

export async function searchSimilarChunks(embedding: number[], limit: number) {
  const result = await pool.query(
    `
      SELECT
        dc.id,
        dc.document_id,
        dc.content,
        dc.chunk_index,
        d.title AS document_title,
        dc.embedding <=> $1::vector AS distance
      FROM document_chunks dc
      JOIN documents d
        ON dc.document_id = d.id
      ORDER BY dc.embedding <=> $1::vector
      LIMIT $2
    `,
    [`[${embedding.join(",")}]`, limit],
  );

  return result.rows;
}

export async function createDocumentChunkWithClient(
  client: PoolClient,
  chunk: CreateDocumentChunk,
) {
  const result = await client.query(
    `
      INSERT INTO document_chunks (
        id,
        document_id,
        content,
        chunk_index,
        embedding
      )
      VALUES ($1, $2, $3, $4, $5::vector)
      RETURNING
        id,
        document_id,
        content,
        chunk_index,
        embedding
    `,
    [
      chunk.id,
      chunk.documentId,
      chunk.content,
      chunk.chunkIndex,
      `[${chunk.embedding.join(",")}]`,
    ],
  );

  return result.rows[0];
}
