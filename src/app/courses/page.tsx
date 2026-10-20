import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/structured-data";
import { getAllCourses } from "@/content/courses";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://monk-technologies.com";

export const metadata: Metadata = {
  title: "AI & MLOps Courses",
  description:
    "Browse our AI training courses: MLOps Fundamentals, GenAI & Prompt Engineering, AI Agent Engineering, and Python. Hands-on bootcamps in Bangalore, India.",
  alternates: {
    canonical: `${siteUrl}/courses`
  },
  openGraph: {
    title: "AI & MLOps Courses — Monk Technologies",
    description:
      "Browse our AI training courses: MLOps Fundamentals, GenAI & Prompt Engineering, AI Agent Engineering, and Python. Hands-on bootcamps in Bangalore, India.",
    url: `${siteUrl}/courses`
  }
};

export default async function CoursesPage() {
  const courses = await getAllCourses();

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
        name: "Courses",
        item: `${siteUrl}/courses`
      }
    ]
  };

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
          Courses
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Pick the path that gets you shipping.
        </h1>
        <p className="max-w-2xl text-balance text-mutedForeground">
          Cohort-based, project-driven programs in MLOps and GenAI—built for
          people who want career-ready skill, not theater.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((c) => (
          <Link
            key={c.slug}
            href={`/courses/${c.slug}`}
            className="group rounded-2xl border border-border bg-card/40 p-6 shadow-glow transition hover:-translate-y-0.5 hover:bg-card/60"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold tracking-tight">{c.title}</p>
                <p className="mt-1 text-sm text-mutedForeground">
                  {c.highlights?.slice(0, 2).join(" • ") ??
                    "A modern curriculum that teaches what real teams use."}
                </p>
              </div>
              {c.level ? (
                <Badge className="bg-background/20">{c.level}</Badge>
              ) : null}
            </div>
            <div className="mt-5 text-sm font-semibold">View details →</div>
          </Link>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card/40 p-6">
        <p className="text-sm text-mutedForeground">
          Want help choosing? Tell us your goals and we’ll recommend the right
          course.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button
            asChild
            href="https://chat.whatsapp.com/CTM8XI8RLNu5BJToghFut5?mode=gi_t"
            target="_blank"
            rel="noreferrer"
          >
            Join the Community →
          </Button>
          <Button asChild variant="secondary" href="/community">
            Scan the QR
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}

