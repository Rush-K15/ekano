import api from "../lib/api";

type ChatResponse = {
    response: string;
};

export async function sendMessage(
    message: string
): Promise<string> {
    const { data } =
        await api.post<ChatResponse>(
            "/chat",
            {
                message,
            }
        );

    return data.response;
}