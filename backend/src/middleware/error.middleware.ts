import type { NextFunction, Request, Response } from "express";
import multer from "multer";

export function errorHandler(
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction,
) {
  console.error(error);

  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      response.status(413).json({
        message: "PDF file must be 10 MB or smaller.",
      });

      return;
    }

    response.status(400).json({
      message: "File upload failed.",
    });

    return;
  }

  if (
    error instanceof Error &&
    error.message === "Only PDF files are supported."
  ) {
    response.status(400).json({
      message: error.message,
    });

    return;
  }

  if (error instanceof Error && error.message === "PDF_PARSE_FAILED") {
    response.status(400).json({
      message: "The PDF could not be read. Please upload a valid PDF file.",
    });

    return;
  }

  response.status(500).json({
    message: "Something went wrong. Please try again.",
  });
}
