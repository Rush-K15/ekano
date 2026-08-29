import ai from "../lib/ai.js";
import type { Message } from "../types/chat.types.js";
import { retrieveKnowledge } from "./retriever.service.js";

export async function generateResponse(messages: Message[]) {
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

Your role is to help users find and understand information from their organization's knowledge base.

Rules:

1. For greetings, casual conversation, or questions about yourself and your capabilities:
   - Respond naturally and briefly.
   - You may explain that you are Ekano, an Enterprise Knowledge Assistant.
   - These responses do not require company knowledge.

2. For questions about the company, its policies, procedures, documents, employees, benefits, security, or other organization-specific information:
   - Answer only using the provided company knowledge.
   - If the answer is not present in the company knowledge, say that you don't have enough information.
   - Never invent or assume company-specific information.

3. When company knowledge is relevant:
   - Answer directly and accurately.
   - Ignore retrieved context that is unrelated to the question.
   - Keep answers concise.

Company Knowledge:

${context || "No relevant company knowledge found."}
`,
      },
      ...messages,
    ],
  });

  return {
    response:
      completion.choices[0]?.message?.content ??
      "I couldn't generate a response.",

    sources: retrievedChunks.map((chunk) => ({
      title: chunk.documentTitle,
      distance: chunk.distance,
    })),
  };
}
