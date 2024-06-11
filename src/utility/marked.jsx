import DOMPurify from "dompurify";
import { marked } from "marked";

export const convertMarkdownToHtml = (markdown) => {
  // Convert Markdown to HTML using marked
  const rawHtml = marked(markdown);
  // Sanitize the HTML
  const sanitizedHtml = DOMPurify.sanitize(rawHtml);
  return sanitizedHtml;
};
