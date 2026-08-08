import { createDocument } from "../repositories/document.repository.js";
import type { Document } from "../types/document.types.js";

export function addDocument(title: string, content: string): Document {
  const document: Document = {
    id: crypto.randomUUID(),
    title,
    content,
  };

  return createDocument(document);
}
