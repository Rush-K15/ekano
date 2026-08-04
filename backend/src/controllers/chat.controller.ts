import type { Request, Response } from "express";
import type { Message } from "../types/chat.types.js";

import { generateResponse } from "../services/chat.service.js";

type ChatRequest = {
    messages: Message[];
};

export async function sendMessage(
    request: Request<{}, {}, ChatRequest>,
    response: Response
) {
    const { messages } = request.body;

    const aiResponse =
        await generateResponse(messages);

    response.status(200).json({
        response: aiResponse,
    });
}