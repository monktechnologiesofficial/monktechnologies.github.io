import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type BlogPostMeta = {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags?: string[];
  author?: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

async function readBlogFile(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  return await fs.readFile(filePath, "utf8");
}

export async function getBlogSlugs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(BLOG_DIR);
    return entries
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
      .filter((f) => !f.toUpperCase().startsWith("README"))
      .map((f) => f.replace(/\.(md|mdx)$/, ""))
      .sort();
  } catch {
    return [];
  }
}

export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  const slugs = await getBlogSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const src = await readBlogFile(slug);
      const { data } = matter(src);
      return {
        title: String(data.title ?? slug),
        slug: String(data.slug ?? slug),
        description: String(data.description ?? ""),
        date: String(data.date ?? new Date().toISOString()),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
        author: data.author ? String(data.author) : undefined
      } satisfies BlogPostMeta;
    })
  );

  // Sort by date, newest first
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const src = await readBlogFile(slug);
  const { content, data } = matter(src);
  return {
    title: String(data.title ?? slug),
    slug: String(data.slug ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? new Date().toISOString()),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    author: data.author ? String(data.author) : undefined,
    content
  };
}
