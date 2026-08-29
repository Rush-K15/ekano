"use client";

import { useEffect, useState } from "react";

import AddDocumentForm from "./AddDocumentForm";
import DocumentList from "./DocumentList";

import {
  createDocument,
  deleteDocument,
  getDocuments,
  type Document,
} from "@/services/documents";

export default function KnowledgeBasePage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoadingDocuments, setIsLoadingDocuments] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadDocuments() {
      try {
        const data = await getDocuments();

        setDocuments(data);
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to load documents.");
      } finally {
        setIsLoadingDocuments(false);
      }
    }

    loadDocuments();
  }, []);

  async function handleAddDocument(title: string, content: string) {
    const document = await createDocument(title, content);

    setDocuments((previousDocuments) => [...previousDocuments, document]);
  }

  async function handleDeleteDocument(id: string) {
    try {
      setErrorMessage("");

      await deleteDocument(id);

      setDocuments((previousDocuments) =>
        previousDocuments.filter((document) => document.id !== id),
      );
    } catch (error) {
      console.error(error);

      setErrorMessage("Failed to delete document. Please try again.");

      throw error;
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

      {errorMessage && (
        <div className="mb-6 rounded-lg border border-red-900 bg-red-950/40 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </div>
      )}

      <AddDocumentForm onAdd={handleAddDocument} />

      <DocumentList
        documents={documents}
        isLoading={isLoadingDocuments}
        onDelete={handleDeleteDocument}
      />
    </div>
  );
}
