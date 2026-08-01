"use client";
import { useState } from "react";

import ChatWindow from "@/components/dashboard/ChatWindow";
import MessageInput from "@/components/dashboard/MessageInput";

import { sendMessage } from "@/services/chat";

import type { Message } from "@/types/chat";

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "user",
            content: "How do I deploy Next.js?",
        },
        {
            id: "2",
            role: "assistant",
            content: "You can deploy a Next.js application using Vercel.",
        },
    ]);

    async function handleSend(content: string) {
        // Create the user's message
        const userMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content,
        };

        // Show it immediately
        setMessages((previousMessages) => [
            ...previousMessages,
            userMessage,
        ]);

        try {
            // Call the backend
            const response = await sendMessage(content);

            // Create Ekano's reply
            const assistantMessage: Message = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: response,
            };

            // Show the AI response
            setMessages((previousMessages) => [
                ...previousMessages,
                assistantMessage,
            ]);
        } catch (error) {
            console.error(error);

            const errorMessage: Message = {
                id: crypto.randomUUID(),
                role: "assistant",
                content:
                    "Sorry, something went wrong. Please try again.",
            };

            setMessages((previousMessages) => [
                ...previousMessages,
                errorMessage,
            ]);
        }
    }

    return (
        <div className="flex h-full flex-col">
            <ChatWindow messages={messages} />

            <MessageInput onSend={handleSend} />
        </div>
    );
}