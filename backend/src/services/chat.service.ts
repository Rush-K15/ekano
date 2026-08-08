import ai from "../lib/ai.js";
import type { Message } from "../types/chat.types.js";
import { retrieveKnowledge } from "./retriever.service.js";

export async function generateResponse(messages: Message[]): Promise<string> {
  const latestMessage = messages[messages.length - 1];

  const context = await retrieveKnowledge(latestMessage.content);

  const completion = await ai.chat.completions.create({
    model: "google/gemma-4-26b-a4b-it:free",

    messages: [
      {
        role: "system",
        content: `
You are Ekano, an Enterprise Knowledge Assistant.

Answer using the company knowledge whenever it is relevant.

If the answer is not present in the company knowledge, answer normally.

Company Knowledge:

${context || "No relevant company knowledge found."}
`,
      },

      ...messages,
    ],
  });

  return (
    completion.choices[0].message.content ?? "I couldn't generate a response."
  );
}
