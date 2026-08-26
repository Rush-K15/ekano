import { createEmbedding } from "./services/embedding.service.js";
import { searchSimilarChunks } from "./repositories/document-chunk.repository.js";

const query = "How many vacation days do employees get?";

const queryEmbedding = await createEmbedding(query);

const chunks = await searchSimilarChunks(queryEmbedding, 5);

console.log("Query:", query);
console.log("\nRetrieved Chunks:\n");

for (const [index, chunk] of chunks.entries()) {
  console.log(`--- Result ${index + 1} ---`);
  console.log("Distance:", chunk.distance);
  console.log("Content:", chunk.content);
  console.log();
}