import type { Document } from "@/services/documents";

import DocumentCard from "./DocumentCard";

type DocumentListProps = {
  documents: Document[];
  isLoading: boolean;
  onDelete: (id: string) => Promise<void>;
};

export default function DocumentList({
  documents,
  isLoading,
  onDelete,
}: DocumentListProps) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Your Knowledge</h2>

        <span className="text-sm text-zinc-500">
          {documents.length} documents
        </span>
      </div>

      {isLoading ? (
        <p className="text-sm text-zinc-500">Loading documents...</p>
      ) : documents.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-800 p-8 text-center">
          <p className="text-zinc-400">No documents added yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {documents.map((document) => (
            <DocumentCard
              key={document.id}
              document={document}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}
