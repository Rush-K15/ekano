import type { Request, Response } from "express";

import { addDocument, getDocuments } from "../services/document.service.js";

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
