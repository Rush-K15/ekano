import api from "../lib/api";
import type { Message, Source } from "@/types/chat";

type ChatResponse = {
  response: string;
  sources: Source[];
};

export async function sendMessage(messages: Message[]): Promise<ChatResponse> {
  const response = await api.post<ChatResponse>("/chat", {
    messages,
  });

  return response.data;
}
