import type { Request, Response } from "express";

import {
  addDocument,
  getDocuments,
  removeDocument,
} from "../services/document.service.js";

import { extractTextFromPdf } from "../services/pdf.service.js";

type CreateDocumentRequest = {
  title: string;
  content: string;
};

export async function getAllDocuments(request: Request, response: Response) {
  const documents = await getDocuments();

  response.status(200).json({
    documents,
  });
}

export async function createDocument(
  request: Request<{}, {}, CreateDocumentRequest>,
  response: Response,
) {
  console.log("POST /documents HIT");
  const { title, content } = request.body;

  if (!title || !content) {
    response.status(400).json({
      message: "Title and content are required.",
    });

    return;
  }

  const document = await addDocument(title, content);

  response.status(201).json({
    document,
  });
}

export async function deleteDocument(
  request: Request<{ id: string }>,
  response: Response,
) {
  const { id } = request.params;

  const deleted = await removeDocument(id);

  if (!deleted) {
    response.status(404).json({
      message: "Document not found.",
    });

    return;
  }

  response.status(200).json({
    message: "Document deleted successfully.",
  });
}

export async function uploadDocument(request: Request, response: Response) {
  if (!request.file) {
    response.status(400).json({
      message: "PDF file is required.",
    });

    return;
  }

  const content = await extractTextFromPdf(request.file.buffer);

  if (!content) {
    response.status(400).json({
      message: "No readable text found in the PDF.",
    });

    return;
  }

  const title =
    request.body.title?.trim() ||
    request.file.originalname.replace(/\.pdf$/i, "");

  const document = await addDocument(title, content);

  response.status(201).json({
    document,
  });
}
