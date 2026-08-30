"use client";

import { useState } from "react";

import { sendMessage } from "@/services/chat";
import type { Message, Source } from "@/types/chat";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const [isGenerating, setIsGenerating] = useState(false);

  function addMessage(message: Message) {
    setMessages((previousMessages) => [...previousMessages, message]);
  }

  function updateAssistantMessage(
    id: string,
    content: string,
    sources: Source[] = [],
  ) {
    setMessages((previousMessages) =>
      previousMessages.map((message) => {
        if (message.id !== id) {
          return message;
        }

        return {
          ...message,
          content,
          sources,
          isLoading: false,
        };
      }),
    );
  }

  async function handleSend(content: string) {
    if (isGenerating) {
      return;
    }

    setIsGenerating(true);

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };

    const assistantPlaceholder: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "Thinking...",
      isLoading: true,
    };

    const updatedMessages = [...messages, userMessage];

    addMessage(userMessage);
    addMessage(assistantPlaceholder);

    try {
      const response = await sendMessage(updatedMessages);

      updateAssistantMessage(
        assistantPlaceholder.id,
        response.response,
        response.sources,
      );
    } catch (error) {
      console.error(error);

      updateAssistantMessage(
        assistantPlaceholder.id,
        "Sorry, something went wrong. Please try again.",
      );
    } finally {
      setIsGenerating(false);
    }
  }

  return {
    messages,
    isGenerating,
    handleSend,
  };
}
