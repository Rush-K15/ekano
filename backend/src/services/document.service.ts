import { createDocument } from "../repositories/document.repository.js";

import type { Document } from "../types/document.types.js";

import crypto from "crypto";

export async function addDocument(
  title: string,
  content: string,
): Promise<Document> {
  const document: Document = {
    id: crypto.randomUUID(),
    title,
    content,
  };

  return await createDocument(document);
}
