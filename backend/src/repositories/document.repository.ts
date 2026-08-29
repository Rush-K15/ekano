import { pool } from "../config/database.js";
import type { Document } from "../types/document.types.js";
import type { PoolClient } from "pg";

export async function getAllDocuments(): Promise<Document[]> {
  const result = await pool.query(
    `
        SELECT
            id,
            title,
            content
        FROM documents
        ORDER BY created_at ASC
        `,
  );

  return result.rows;
}

export async function getDocumentById(
  id: string,
): Promise<Document | undefined> {
  const result = await pool.query(
    `
        SELECT
            id,
            title,
            content
        FROM documents
        WHERE id = $1
        `,
    [id],
  );

  return result.rows[0];
}

export async function createDocument(document: Document): Promise<Document> {
  const result = await pool.query(
    `
        INSERT INTO documents (
            id,
            title,
            content
        )
        VALUES ($1, $2, $3)
        RETURNING
            id,
            title,
            content
        `,
    [document.id, document.title, document.content],
  );

  return result.rows[0];
}

export async function deleteDocumentById(id: string): Promise<boolean> {
  const result = await pool.query(
    `
      DELETE FROM documents
      WHERE id = $1
    `,
    [id],
  );

  return (result.rowCount ?? 0) > 0;
}

export async function createDocumentWithClient(
  client: PoolClient,
  document: Document,
): Promise<Document> {
  const result = await client.query(
    `
      INSERT INTO documents (
        id,
        title,
        content
      )
      VALUES ($1, $2, $3)
      RETURNING
        id,
        title,
        content
    `,
    [document.id, document.title, document.content],
  );

  return result.rows[0];
}
