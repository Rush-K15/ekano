"use client";

import axios from "axios";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const PDF_MIME_TYPE = "application/pdf";

type UploadPdfFormProps = {
  onUpload: (file: File, title?: string) => Promise<void>;
};

export default function UploadPdfForm({ onUpload }: UploadPdfFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    setErrorMessage("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (selectedFile.type !== PDF_MIME_TYPE) {
      setFile(null);
      setErrorMessage("Only PDF files are supported.");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setFile(null);
      setErrorMessage("PDF file must be 10 MB or smaller.");
      return;
    }

    setFile(selectedFile);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!file) {
      setErrorMessage("Please select a PDF file.");
      return;
    }

    try {
      setIsUploading(true);
      setErrorMessage("");

      await onUpload(file, title);

      setFile(null);
      setTitle("");
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message;

        if (typeof message === "string") {
          setErrorMessage(message);
          return;
        }
      }

      setErrorMessage("Failed to upload PDF. Please try again.");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white">Upload PDF</h2>

        <p className="mt-1 text-sm text-zinc-400">
          Upload a PDF to add it to Ekano&apos;s knowledge base.
        </p>
      </div>

      <div className="space-y-4">
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-950 px-6 py-8 text-center transition hover:border-zinc-500 hover:bg-zinc-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="mb-3 h-8 w-8 text-zinc-400"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
            />
          </svg>

          <span className="text-sm font-medium text-white">
            {file ? file.name : "Upload a PDF"}
          </span>

          <span className="mt-1 text-xs text-zinc-500">
            {file
              ? `${(file.size / 1024 / 1024).toFixed(2)} MB · Click to change`
              : "Click to choose a file · PDF only · Maximum 10 MB"}
          </span>

          <input
            type="file"
            accept={PDF_MIME_TYPE}
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title (optional)"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-zinc-500"
        />

        {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}

        <button
          type="submit"
          disabled={isUploading || !file}
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isUploading ? "Uploading..." : "Upload PDF"}
        </button>
      </div>
    </form>
  );
}
