export type Source = {
  documentId: string;
  title: string;
  distance: number;
};

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  isLoading?: boolean;
  sources?: Source[];
};
