"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

import {
  createDocument,
  getDocuments,
  type Document,
} from "@/services/documents";

export default function KnowledgeBasePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [documents, setDocuments] = useState<Document[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingDocuments, setIsLoadingDocuments] = useState(true);

  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadDocuments() {
      try {
        const data = await getDocuments();
        setDocuments(data);
      } catch (error) {
        console.error(error);
        setMessage("Failed to load documents.");
      } finally {
        setIsLoadingDocuments(false);
      }
    }

    loadDocuments();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      setMessage("Title and content are required.");
      return;
    }

    try {
      setIsSubmitting(true);
      setMessage("");

      const document = await createDocument(title.trim(), content.trim());

      setDocuments((previousDocuments) => [...previousDocuments, document]);

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
    <div className="mx-auto w-full max-w-4xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Knowledge Base</h1>

        <p className="mt-2 text-zinc-400">
          Add and manage company knowledge that Ekano can use to answer
          questions.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-10 space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
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
            rows={10}
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

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Your Knowledge</h2>

          <span className="text-sm text-zinc-500">
            {documents.length} documents
          </span>
        </div>

        {isLoadingDocuments ? (
          <p className="text-sm text-zinc-500">Loading documents...</p>
        ) : documents.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-800 p-8 text-center">
            <p className="text-zinc-400">No documents added yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {documents.map((document) => (
              <div
                key={document.id}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg">📄</span>

                  <div className="min-w-0">
                    <h3 className="font-medium text-white">{document.title}</h3>

                    <p className="mt-1 line-clamp-2 text-sm text-zinc-400">
                      {document.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
