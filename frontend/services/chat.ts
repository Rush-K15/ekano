import api from "../lib/api";
import type { Message } from "@/types/chat";

type ChatResponse = {
    response: string;
};

export async function sendMessage(
    messages: Message[]
): Promise<string> {
    const response =
        await api.post<ChatResponse>(
            "/chat",
            {
                messages,
            }
        );

    return response.data.response;
}