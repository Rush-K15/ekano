import { searchSimilarChunks } from "../repositories/document-chunk.repository.js";
import { createEmbedding } from "./embedding.service.js";
const TOP_K = 3;
const MAX_COSINE_DISTANCE = 0.65;
export async function retrieveKnowledge(query: string) {
  const queryEmbedding = await createEmbedding(query);
  const chunks = await searchSimilarChunks(queryEmbedding, TOP_K);
  return chunks
    .filter((chunk) => Number(chunk.distance) <= MAX_COSINE_DISTANCE)
    .map((chunk) => ({
      content: chunk.content,
      documentTitle: chunk.document_title,
      distance: Number(chunk.distance),
    }));
}
