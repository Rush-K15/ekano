import type { Message } from "@/types/chat";

type MessageBubbleProps = {
    message: Message;
};

export default function MessageBubble({
    message,
}: MessageBubbleProps) {
    const isUser = message.role === "user";

    return (
        <div
            className={`flex mb-4 ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >
            <div className="max-w-[70%]">
                {!isUser && (
                    <p className="mb-1 text-xs font-semibold text-zinc-400">
                        Ekano
                    </p>
                )}

                <div
                    className={`rounded-2xl px-4 py-3 ${
                        isUser
                            ? "bg-white text-black"
                            : "bg-zinc-800 text-white"
                    }`}
                >
                    {message.content}
                </div>
            </div>
        </div>
    );
}