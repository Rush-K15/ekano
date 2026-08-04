import MessageBubble from "./MessageBubble";
import type { Message } from "@/types/chat";

type ChatWindowProps = {
    messages: Message[];
};

export default function ChatWindow({
    messages,
}: ChatWindowProps) {
    if (messages.length === 0) {
        return (
            <div className="flex flex-1 items-center justify-center">
                <div className="text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-black">
                            E
                        </div>
                    </div>
                    <h2 className="mb-2 text-3xl font-bold text-white">
                        Welcome to Ekano
                    </h2>

                    <p className="max-w-md text-zinc-400">
                        Your enterprise knowledge assistant.
                        Ask about documents, code,
                        architecture, or company knowledge.
                    </p>
                </div>
            </div>
        );
    }

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