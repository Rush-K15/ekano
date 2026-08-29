import api from "@/lib/api";

export type Document = {
  id: string;
  title: string;
  content: string;
};

type CreateDocumentResponse = {
  document: Document;
};

type GetDocumentsResponse = {
  documents: Document[];
};

type DeleteDocumentResponse = {
  message: string;
};

export async function deleteDocument(id: string): Promise<void> {
  await api.delete<DeleteDocumentResponse>(`/documents/${id}`);
}

export async function createDocument(
  title: string,
  content: string,
): Promise<Document> {
  const response = await api.post<CreateDocumentResponse>("/documents", {
    title,
    content,
  });

  return response.data.document;
}

export async function getDocuments(): Promise<Document[]> {
  const response = await api.get<GetDocumentsResponse>("/documents");

  return response.data.documents;
}

export async function uploadDocument(
  file: File,
  title?: string,
): Promise<Document> {
  const formData = new FormData();

  formData.append("file", file);

  if (title?.trim()) {
    formData.append("title", title.trim());
  }

  const response = await api.post<CreateDocumentResponse>(
    "/documents/upload",
    formData,
  );

  return response.data.document;
}
