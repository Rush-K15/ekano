"use client";

import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";
import { getDocuments } from "@/services/documents";

export default function DashboardPage() {
  const { user } = useAuth();

  const [documentCount, setDocumentCount] = useState<number | null>(null);

  useEffect(() => {
    async function loadDocumentCount() {
      try {
        const documents = await getDocuments();
        setDocumentCount(documents.length);
      } catch (error) {
        console.error("Failed to load documents:", error);
      }
    }

    loadDocumentCount();
  }, []);

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <section>
        <h1 className="text-3xl font-bold">
          Welcome back, {user?.name ?? "there"} 👋
        </h1>

        <p className="mt-2 text-zinc-400">
          Your organization&apos;s knowledge is ready to explore.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-400">
            Knowledge Base
          </p>

          <p className="mt-2 text-3xl font-bold">
            {documentCount ?? "—"}
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            {documentCount === 1 ? "document" : "documents"} available
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-400">
            AI Assistant
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            Ask Ekano
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Get grounded answers from your organization&apos;s knowledge.
          </p>

          <Button href="/chat" className="mt-5">
            Start chatting
          </Button>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="text-lg font-semibold">
          Quick actions
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Jump straight into the most common Ekano workflows.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button href="/chat">
            Ask a question
          </Button>

          <Button
            href="/knowledge-base"
            variant="secondary"
          >
            Add knowledge
          </Button>
        </div>
      </section>
    </div>
  );
}