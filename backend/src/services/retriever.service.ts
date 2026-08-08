import { getAllDocuments } from "../repositories/document.repository.js";

export async function retrieveKnowledge(query: string): Promise<string> {
  const queryWords = query
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 2);

  const documents = await getAllDocuments();

  const rankedDocuments = documents
    .map((document) => {
      const searchableText = `
                ${document.title}
                ${document.content}
            `.toLowerCase();

      const score = queryWords.reduce((total, word) => {
        if (searchableText.includes(word)) {
          return total + 1;
        }

        return total;
      }, 0);

      return {
        document,
        score,
      };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);

  const topDocuments = rankedDocuments.slice(0, 2);

  if (topDocuments.length === 0) {
    return "";
  }

  return topDocuments
    .map(({ document }) => `${document.title}\n${document.content}`)
    .join("\n\n");
}
