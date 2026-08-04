"use client";

import ChatWindow from "@/components/dashboard/ChatWindow";
import MessageInput from "@/components/dashboard/MessageInput";

import { useChat } from "@/hooks/useChat";

export default function ChatPage() {
    const {
        messages,
        isGenerating,
        handleSend,
    } = useChat();

    return (
        <div className="flex h-full flex-col">
            <ChatWindow messages={messages} />

            <MessageInput onSend={handleSend} isGenerating={isGenerating} />
        </div>
    );
}