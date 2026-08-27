import ai from "../lib/ai.js";
import { Message } from "../types/chat.types.js";
import { retrieveKnowledge } from "./retriever.service.js";

export async function generateResponse(messages: Message[]): Promise<string> {
  if (messages.length === 0) {
    throw new Error("At least one message is required.");
  }

  const latestMessage = messages[messages.length - 1];

  const context = await retrieveKnowledge(latestMessage.content);

  const completion = await ai.chat.completions.create({
    model: "nvidia/nemotron-3.5-lightning:free",

    messages: [
      {
        role: "system",
        content: `
You are Ekano, an Enterprise Knowledge Assistant.

Answer the user's question using only the provided company knowledge.

If the company knowledge does not contain enough information to answer the question, clearly say that you don't have enough information.

Do not use your general knowledge to invent or assume company-specific information.

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
