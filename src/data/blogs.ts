import blogsData from "./blogs.json";
import type { BlogItem } from "../types/blog";

export const blogs = blogsData as BlogItem[];

export function getBlogBySlug(slug: string): BlogItem | undefined {
  return blogs.find((blog) => blog.slug === slug);
}
