import MessageBubble from "./MessageBubble";
import type { Message } from "@/types/chat";

type ChatWindowProps = {
    messages: Message[];
};

export default function ChatWindow({
    messages,
}: ChatWindowProps) {
    return (
        <div className="flex-1 overflow-y-auto p-6">
            {messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                />
            ))}
        </div>
    );
}