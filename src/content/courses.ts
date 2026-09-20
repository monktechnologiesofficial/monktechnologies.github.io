import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

function asHighlight(h: unknown): string {
  if (typeof h === "string") return h;
  if (h && typeof h === "object") {
    return Object.entries(h as Record<string, string>)
      .map(([k, v]) => `${k}: ${v}`)
      .join(", ");
  }
  return String(h);
}

export type CourseMeta = {
  title: string;
  slug: string;
  order?: number;
  level?: string;
  duration?: string;
  highlights?: string[];
};

const COURSES_DIR = path.join(process.cwd(), "content", "courses");

async function readCourseFile(slug: string) {
  const filePath = path.join(COURSES_DIR, `${slug}.mdx`);
  return await fs.readFile(filePath, "utf8");
}

export async function getCourseSlugs(): Promise<string[]> {
  const entries = await fs.readdir(COURSES_DIR);
  return entries
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .sort();
}

export async function getAllCourses(): Promise<CourseMeta[]> {
  const slugs = await getCourseSlugs();
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const src = await readCourseFile(slug);
      const { data } = matter(src);
      return {
        title: String(data.title ?? slug),
        slug: String(data.slug ?? slug),
        order:
          typeof data.order === "number"
            ? data.order
            : data.order
              ? Number(data.order)
              : undefined,
        level: data.level ? String(data.level) : undefined,
        duration: data.duration ? String(data.duration) : undefined,
        highlights: Array.isArray(data.highlights)
          ? data.highlights.map(asHighlight)
          : undefined
      } satisfies CourseMeta;
    })
  );

  return items.sort((a, b) => {
    const ao = a.order ?? 9999;
    const bo = b.order ?? 9999;
    if (ao !== bo) return ao - bo;
    return a.title.localeCompare(b.title);
  });
}

export async function getCourseSourceBySlug(slug: string) {
  const src = await readCourseFile(slug);
  const { content, data } = matter(src);
  const meta: CourseMeta = {
    title: String(data.title ?? slug),
    slug: String(data.slug ?? slug),
    order:
      typeof data.order === "number"
        ? data.order
        : data.order
          ? Number(data.order)
          : undefined,
    level: data.level ? String(data.level) : undefined,
    duration: data.duration ? String(data.duration) : undefined,
    highlights: Array.isArray(data.highlights)
      ? data.highlights.map(asHighlight)
      : undefined
  };
  return { meta, content };
}


