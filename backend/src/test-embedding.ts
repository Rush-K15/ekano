import { createEmbedding } from "./services/embedding.service.js";

const text = "Employees receive 24 paid leave days every year.";

const embedding = await createEmbedding(text);

console.log("Embedding dimensions:", embedding.length);

console.log("First 5 values:", embedding.slice(0, 5));
