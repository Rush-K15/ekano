import ai from "../lib/ai.js";

export async function generateResponse(
    message: string
): Promise<string> {
    const completion =
        await ai.chat.completions.create({
            model:
                "google/gemma-4-26b-a4b-it:free",

            messages: [
                {
                    role: "user",
                    content: message,
                },
            ],
        });

    return (
        completion.choices[0].message.content ??
        "I couldn't generate a response."
    );
}