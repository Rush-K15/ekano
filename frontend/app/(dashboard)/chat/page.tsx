"use client";
import { useState } from "react";

import ChatWindow from "@/components/dashboard/ChatWindow";
import MessageInput from "@/components/dashboard/MessageInput";

import { sendMessage } from "@/services/chat";

import type { Message } from "@/types/chat";

export default function ChatPage() {
    const [isGenerating, setIsGenerating] = useState(false);
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
        setIsGenerating(true);

        // User message
        const userMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content,
        };

        // Placeholder message
        const assistantPlaceholder: Message = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: "Thinking...",
            isLoading: true,
        };

        // Show both immediately
        setMessages((previousMessages) => [
            ...previousMessages,
            userMessage,
            assistantPlaceholder,
        ]);

        try {
            const response = await sendMessage(content);

            setMessages((previousMessages) =>
                previousMessages.map((message) => {
                    if (message.id !== assistantPlaceholder.id) {
                        return message;
                    }

                    return {
                        ...message,
                        content: response,
                        isLoading: false,
                    };
                })
            );
        } catch (error) {
            console.error(error);

            setMessages((previousMessages) =>
                previousMessages.map((message) => {
                    if (message.id !== assistantPlaceholder.id) {
                        return message;
                    }

                    return {
                        ...message,
                        content:
                            "Sorry, something went wrong. Please try again.",
                        isLoading: false,
                    };
                })
            );
        } finally {
            setIsGenerating(false);
        }

    }

    return (
        <div className="flex h-full flex-col">
            <ChatWindow messages={messages} />

            <MessageInput onSend={handleSend} isGenerating={isGenerating} />
        </div>
    );
}