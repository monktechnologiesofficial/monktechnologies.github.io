import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/prose";
import { getCourseSlugs, getCourseSourceBySlug } from "@/content/courses";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const slugs = await getCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CourseDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let meta: Awaited<ReturnType<typeof getCourseSourceBySlug>>["meta"];
  let content: Awaited<ReturnType<typeof getCourseSourceBySlug>>["content"];
  try {
    ({ meta, content } = await getCourseSourceBySlug(slug));
  } catch {
    return notFound();
  }

  const compiled = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm]
      }
    }
  });

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/courses"
            className="text-sm text-mutedForeground hover:text-foreground"
          >
            Courses
          </Link>
          <span className="text-mutedForeground">/</span>
          {meta.level ? (
            <Badge className="bg-background/20">{meta.level}</Badge>
          ) : null}
        </div>

        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {meta.title}
        </h1>
        {meta.duration ? (
          <p className="max-w-2xl text-balance text-mutedForeground">
            Duration: {meta.duration}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-2">
          <Button
            asChild
            size="lg"
            href="https://wa.link/nprk9l"
            target="_blank"
            rel="noreferrer"
          >
            Enroll via WhatsApp
          </Button>
          <Button asChild size="lg" variant="secondary" href="/youtube">
            Watch free lessons
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
            Outcomes
          </p>
          {meta.highlights?.length ? (
            <ul className="mt-4 space-y-2 text-sm text-mutedForeground">
              {meta.highlights.map((o) => (
                <li key={o} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                  {o}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-mutedForeground">
              Highlights will appear here (set `highlights` in the MDX
              frontmatter).
            </p>
          )}
        </div>
        <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-glow">
          <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
            Quick facts
          </p>
          <dl className="mt-4 grid gap-3 text-sm">
            <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/30 px-4 py-3">
              <dt className="text-mutedForeground">Level</dt>
              <dd className="font-semibold">{meta.level ?? "—"}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/30 px-4 py-3">
              <dt className="text-mutedForeground">Duration</dt>
              <dd className="font-semibold">{meta.duration ?? "—"}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-mutedForeground">
            Want a recommendation? Tell us your goals.
          </p>
          <div className="mt-4">
            <Button
              asChild
              variant="secondary"
              href="https://wa.link/nprk9l"
              target="_blank"
              rel="noreferrer"
            >
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-glow sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
          Syllabus
        </p>
        <div className="mt-4">
          <Prose>{compiled.content}</Prose>
        </div>
      </div>
    </div>
  );
}


