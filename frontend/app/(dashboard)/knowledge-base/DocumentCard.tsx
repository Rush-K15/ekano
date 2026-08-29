"use client";

import { useState } from "react";

import type { Document } from "@/services/documents";

type DocumentCardProps = {
  document: Document;
  onDelete: (id: string) => Promise<void>;
};

export default function DocumentCard({
  document,
  onDelete,
}: DocumentCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      `Delete "${document.title}"? This will also remove its indexed knowledge.`,
    );

    if (!confirmed) {
      return;
    }

    try {
      setIsDeleting(true);

      await onDelete(document.id);
    } catch (error) {
      console.error(error);
      setIsDeleting(false);
    }
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <span className="text-lg">📄</span>

          <div className="min-w-0">
            <h3 className="font-medium text-white">{document.title}</h3>

            <p className="mt-1 line-clamp-2 text-sm text-zinc-400">
              {document.content}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDelete}
          disabled={isDeleting}
          className="shrink-0 rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-red-500 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
