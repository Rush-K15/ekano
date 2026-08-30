"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import AutoResizeTextarea from "@/components/ui/AutoResizeTextarea";

type MessageInputProps = {
  onSend: (message: string) => void;
  isGenerating: boolean;
};

export default function MessageInput({
  onSend,
  isGenerating,
}: MessageInputProps) {
  const [input, setInput] = useState("");

  function handleSend() {
    const message = input.trim();

    if (!message || isGenerating) return;

    onSend(message);

    setInput("");
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      handleSend();
    }
  }

  return (
    <div className="border-t border-zinc-800 p-4">
      <div className="flex items-end gap-3">
        <AutoResizeTextarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Ekano anything..."
          disabled={isGenerating}
          aria-label="Message"
          className="flex-1 rounded-lg bg-zinc-900 px-4 py-3 text-white outline-none"
        />

        <Button onClick={handleSend} disabled={isGenerating}>
          Send
        </Button>
      </div>
    </div>
  );
}
