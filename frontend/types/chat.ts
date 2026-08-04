export type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
    isLoading?: boolean;
};