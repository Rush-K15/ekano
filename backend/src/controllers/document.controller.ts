import type { Request, Response } from "express";

import { addDocument } from "../services/document.service.js";

type CreateDocumentRequest = {
  title: string;
  content: string;
};

export function createDocument(
  request: Request<{}, {}, CreateDocumentRequest>,
  response: Response,
) {
  const { title, content } = request.body;

  if (!title || !content) {
    response.status(400).json({
      message: "Title and content are required.",
    });

    return;
  }

  const document = addDocument(title, content);

  response.status(201).json({
    document,
  });
}
