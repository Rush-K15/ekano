import ai from "./lib/ai.js";

const response = await ai.embeddings.create({
    model: "nvidia/nemotron-3-embed-1b:free",
    input: "Employees receive 24 paid leave days every year.",
    encoding_format: "float",
});

const embedding = response.data[0].embedding;

console.log("Embedding dimensions:", embedding.length);
console.log("First 5 values:", embedding.slice(0, 5));