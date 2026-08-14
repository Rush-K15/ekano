import ai from "../lib/ai.js";

const EMBEDDING_MODEL = "nvidia/nemotron-3-embed-1b:free";

export async function createEmbedding(text: string): Promise<number[]> {
  const response = await ai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: text,
    encoding_format: "float",
  });

  return response.data[0].embedding;
}
