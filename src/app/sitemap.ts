import type { MetadataRoute } from "next";
import { getCourseSlugs } from "@/content/courses";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  const base = siteUrl.replace(/\/$/, "");

  const staticRoutes = ["", "/courses", "/youtube", "/about", "/contact"].map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: new Date()
    })
  );

  const slugs = await getCourseSlugs();
  const courseRoutes = slugs.map((slug) => ({
    url: `${base}/courses/${slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...courseRoutes];
}


