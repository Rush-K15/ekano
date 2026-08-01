"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

type MessageInputProps = {
    onSend: (message: string) => void;
};

export default function MessageInput({
    onSend,
}: MessageInputProps) {
    const [input, setInput] = useState("");

    function handleSend() {
        const message = input.trim();

        if (!message) return;

        onSend(message);

        setInput("");
    }

    return (
        <div className="border-t border-zinc-800 p-4">
            <div className="flex gap-3">
                <input
                    className="flex-1 rounded-lg bg-zinc-900 px-4 py-3 text-white outline-none"
                    value={input}
                    onChange={(e) =>
                        setInput(e.target.value)
                    }
                    placeholder="Ask Ekano anything..."
                />

                <Button onClick={handleSend}>
                    Send
                </Button>
            </div>
        </div>
    );
}