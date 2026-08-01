"use client";

import { useState } from "react";

import ChatWindow from "@/components/dashboard/ChatWindow";
import MessageInput from "@/components/dashboard/MessageInput";

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
            content:
                "You can deploy a Next.js application using Vercel.",
        },
    ]);

    const handleSend = (content: string) => {
        const newMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content,
        };

        setMessages((previousMessages) => [
            ...previousMessages,
            newMessage,
        ]);
        setTimeout(() => {
            const assistantMessage: Message = {
                id: crypto.randomUUID(),
                role: "assistant",
                content:
                    "I'm Ekano. Soon I'll answer using your enterprise knowledge base!",
            };

            setMessages((previousMessages) => [
                ...previousMessages,
                assistantMessage,
            ]);
        }, 800);
    };

    return (
        <div className="flex h-full flex-col">
            <ChatWindow messages={messages} />

            <MessageInput onSend={handleSend} />
        </div>
    );
}