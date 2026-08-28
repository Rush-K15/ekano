"use client";

import { FormEvent, useState } from "react";

import { createDocument } from "@/services/documents";

export default function KnowledgeBasePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      setMessage("Title and content are required.");
      return;
    }

    try {
      setIsSubmitting(true);
      setMessage("");

      await createDocument(title.trim(), content.trim());

      setTitle("");
      setContent("");
      setMessage("Document added successfully.");
    } catch (error) {
      console.error(error);
      setMessage("Failed to add document. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Knowledge Base</h1>

        <p className="mt-2 text-zinc-400">
          Add company knowledge that Ekano can use to answer questions.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
      >
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Document title
          </label>

          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. Expense Reimbursement Policy"
            disabled={isSubmitting}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-zinc-500"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Content
          </label>

          <textarea
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Paste company knowledge here..."
            rows={12}
            disabled={isSubmitting}
            className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-zinc-500"
          />
        </div>

        {message && <p className="text-sm text-zinc-400">{message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-white px-5 py-2.5 font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Adding..." : "Add Document"}
        </button>
      </form>
    </div>
  );
}
