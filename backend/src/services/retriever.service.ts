import { searchSimilarChunks } from "../repositories/document-chunk.repository.js";
import { createEmbedding } from "./embedding.service.js";

export async function retrieveKnowledge(query: string): Promise<string> {
  const queryEmbedding = await createEmbedding(query);

  const chunks = await searchSimilarChunks(queryEmbedding, 3);

  if (chunks.length === 0) {
    return "";
  }

  return chunks.map((chunk) => `${chunk.content}`).join("\n\n");
}
