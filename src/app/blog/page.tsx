import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { StructuredData } from "@/components/structured-data";
import { getAllBlogPosts } from "@/content/blog";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://monk-technologies.com";

export const metadata: Metadata = {
  title: "AI Training Blog",
  description:
    "Articles on AI training, MLOps, generative AI, and machine learning. Insights, tutorials, and news from Monk Technologies online AI institute.",
  alternates: {
    canonical: `${siteUrl}/blog`
  },
  openGraph: {
    title: "AI Training Blog — Monk Technologies",
    description:
      "Articles on AI training, MLOps, generative AI, and machine learning. Insights, tutorials, and news from Monk Technologies online AI institute.",
    url: `${siteUrl}/blog`
  }
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`
      }
    ]
  };

  const blogData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Monk Technologies AI Training Blog",
    description:
      "Articles on AI training, MLOps, generative AI, and machine learning",
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "EducationalOrganization",
      name: "Monk Technologies",
      url: siteUrl
    }
  };

  return (
    <>
      <StructuredData data={[breadcrumbData, blogData]} />
      <div className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
            Blog
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            AI Training Insights & Tutorials
          </h1>
          <p className="max-w-2xl text-balance text-mutedForeground">
            Learn about MLOps, generative AI, prompt engineering, and career
            paths in artificial intelligence. Written by our instructors and AI
            practitioners.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card/40 p-8 text-center">
            <p className="text-mutedForeground">
              No blog posts yet. Check back soon for AI training insights and
              tutorials.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border bg-card/40 p-6 transition hover:-translate-y-0.5 hover:bg-card/60"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {post.tags?.map((tag) => (
                        <Badge key={tag} className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight group-hover:text-electric">
                      {post.title}
                    </h2>
                    <p className="text-sm text-mutedForeground">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-3 pt-1 text-xs text-mutedForeground">
                      {post.author && <span>{post.author}</span>}
                      <span>•</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </time>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-electric">
                    Read more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
