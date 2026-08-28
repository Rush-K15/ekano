import type { Message } from "@/types/chat";
import TypingIndicator from "./TypingIndicator";

type MessageBubbleProps = {
  message: Message;
};

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[70%]">
        {!isUser && (
          <p className="mb-1 text-xs font-semibold text-zinc-400">Ekano</p>
        )}

        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser ? "bg-white text-black" : "bg-zinc-800 text-white"
          }`}
        >
          {message.isLoading ? (
            <TypingIndicator />
          ) : (
            <>
              <div>{message.content}</div>

              {!isUser && message.sources && message.sources.length > 0 && (
                <div className="mt-4 border-t border-zinc-700 pt-3">
                  <p className="mb-2 text-xs font-semibold text-zinc-400">
                    Sources
                  </p>

                  <div className="space-y-1">
                    {message.sources.map((source, index) => (
                      <div
                        key={`${source.documentId}-${index}`}
                        className="flex items-center gap-2 text-xs text-zinc-300"
                      >
                        <span>📄</span>
                        <span>{source.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
