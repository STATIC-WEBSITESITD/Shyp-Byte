export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogItem {
  id: number;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  tags: string[];
  img: string;
  cover: string;
  content: BlogBlock[];
}
