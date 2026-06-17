import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: false,
});

export function renderMarkdown(raw: string): string {
  return marked.parse(raw) as string;
}
