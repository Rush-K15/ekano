const CHUNK_SIZE = 500;
const CHUNK_OVERLAP = 100;

export function chunkText(text: string): string[] {
  const chunks: string[] = [];

  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + CHUNK_SIZE, text.length);

    const chunk = text.slice(start, end).trim();

    if (chunk.length > 0) {
      chunks.push(chunk);
    }

    if (end === text.length) {
      break;
    }

    start += CHUNK_SIZE - CHUNK_OVERLAP;
  }

  return chunks;
}
