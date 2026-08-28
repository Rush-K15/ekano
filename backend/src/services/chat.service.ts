import ai from "../lib/ai.js";
import type { Message } from "../types/chat.types.js";
import { retrieveKnowledge } from "./retriever.service.js";

export async function generateResponse(messages: Message[]): Promise<string> {
  if (messages.length === 0) {
    throw new Error("At least one message is required.");
  }

  const latestMessage = messages[messages.length - 1];

  const retrievedChunks = await retrieveKnowledge(latestMessage.content);

  const context = retrievedChunks
    .map((chunk) => `Source: ${chunk.documentTitle}\n${chunk.content}`)
    .join("\n\n");

  const completion = await ai.chat.completions.create({
    model: "nvidia/nemotron-3-super-120b-a12b:free",

    messages: [
      {
        role: "system",
        content: `
You are Ekano, an Enterprise Knowledge Assistant.

Answer questions using the provided company knowledge.

Rules:
- Use company knowledge only when it is relevant to the user's question.
- If the answer is present in the company knowledge, answer directly and accurately.
- If the answer is not present in the company knowledge, say:
  "I don't have enough information to answer that based on the available company knowledge."
- Never invent or assume company policies.
- Do not use general knowledge to answer company-specific questions.
- Ignore retrieved context that is unrelated to the user's question.
- Keep answers concise.

Company Knowledge:

${context || "No relevant company knowledge found."}
`,
      },

      ...messages,
    ],
  });

  return (
    completion.choices[0]?.message?.content ?? "I couldn't generate a response."
  );
}
