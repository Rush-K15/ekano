import { PDFParse } from "pdf-parse";

export async function extractTextFromPdf(buffer: Buffer): Promise<string> {
  const parser = new PDFParse({
    data: new Uint8Array(buffer),
  });

  try {
    const result = await parser.getText();

    return result.text.trim();
  } catch (error) {
    console.error("Failed to parse PDF:", error);

    throw new Error("PDF_PARSE_FAILED");
  } finally {
    await parser.destroy();
  }
}
