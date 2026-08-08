import type { Document } from "../types/document.types.js";
import { companyKnowledge } from "../knowledge/company.js";

export function getAllDocuments(): Document[] {
  return companyKnowledge;
}

export function getDocumentById(id: string): Document | undefined {
  return companyKnowledge.find((document) => document.id === id);
}

export function createDocument(document: Document): Document {
  companyKnowledge.push(document);

  return document;
}
