import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Prose } from "@/components/prose";
import { StructuredData } from "@/components/structured-data";
import { getBlogSlugs, getBlogPostBySlug } from "@/content/blog";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://monk-technologies.com";

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let post: Awaited<ReturnType<typeof getBlogPostBySlug>>;
  try {
    post = await getBlogPostBySlug(slug);
  } catch {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${siteUrl}/blog/${slug}`
    },
    openGraph: {
      title: `${post.title} — Monk Technologies`,
      description: post.description,
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description
    }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: Awaited<ReturnType<typeof getBlogPostBySlug>>;
  try {
    post = await getBlogPostBySlug(slug);
  } catch {
    return notFound();
  }

  const compiled = await compileMDX({
    source: post.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm]
      }
    }
  });

  const articleData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author
      ? {
          "@type": "Person",
          name: post.author
        }
      : {
          "@type": "Organization",
          name: "Monk Technologies"
        },
    publisher: {
      "@type": "EducationalOrganization",
      name: "Monk Technologies",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/brand/logo.png`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`
    },
    keywords: post.tags?.join(", ")
  };

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
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${slug}`
      }
    ]
  };

  return (
    <>
      <StructuredData data={[articleData, breadcrumbData]} />
      <article className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/blog"
              className="text-mutedForeground hover:text-foreground"
            >
              Blog
            </Link>
            <span className="text-mutedForeground">/</span>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {post.tags?.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>

            <p className="text-lg text-mutedForeground">{post.description}</p>

            <div className="flex items-center gap-3 text-sm text-mutedForeground">
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
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-glow sm:p-8">
          <Prose>{compiled.content}</Prose>
        </div>

        <div className="rounded-2xl border border-border bg-muted p-6">
          <h2 className="font-semibold">Explore Our Courses</h2>
          <p className="mt-2 text-sm text-mutedForeground">
            Interested in learning more? Check out our hands-on{" "}
            <Link href="/courses" className="font-semibold text-electric">
              AI training courses
            </Link>
            , including MLOps, GenAI, and AI Agent Engineering.
          </p>
        </div>
      </article>
    </>
  );
}
