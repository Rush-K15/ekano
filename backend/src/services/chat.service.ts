import ai from "../lib/ai.js";
import { Message } from "../types/chat.types.js";

export async function generateResponse(
    messages: Message[]
): Promise<string> {
    const completion =
        await ai.chat.completions.create({
            model:
                "google/gemma-4-26b-a4b-it:free",
                messages
        });

    return (
        completion.choices[0].message.content ??
        "I couldn't generate a response."
    );
}