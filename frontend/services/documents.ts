import api from "@/lib/api";

export type Document = {
  id: string;
  title: string;
  content: string;
};

type CreateDocumentResponse = {
  document: Document;
};

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
