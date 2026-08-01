import type {
    Request,
    Response,
} from "express";

import { generateResponse } from "../services/chat.service.js";

type ChatRequest = {
    message: string;
};

export async function sendMessage(
    request: Request<
        {},
        {},
        ChatRequest
    >,
    response: Response
) {
    try {
        const { message } = request.body;

        const aiResponse =
            await generateResponse(message);

        response.status(200).json({
            response: aiResponse,
        });
    } catch (error) {
        console.error(error);

        response.status(500).json({
            message: "Failed to generate AI response.",
        });
    }
}