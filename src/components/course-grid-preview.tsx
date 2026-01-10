import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllCourses } from "@/content/courses";

export async function CourseGridPreview() {
  const courses = await getAllCourses();
  const preview = courses.slice(0, 3);
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {preview.map((c) => (
          <Link
            key={c.slug}
            href={`/courses/${c.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-5 shadow-glow transition hover:-translate-y-0.5 hover:bg-card/60"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,92,128,.22),transparent_60%)] blur-2xl"
            />
            <div className="relative space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {c.duration ? (
                  <Badge className="bg-background/20">{c.duration}</Badge>
                ) : null}
                {c.level ? (
                  <Badge className="bg-background/20">{c.level}</Badge>
                ) : null}
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">
                  {c.title}
                </p>
                <p className="mt-1 text-sm text-mutedForeground">
                  A modern curriculum that teaches what real teams use.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-mutedForeground">
                {(c.highlights?.slice(0, 3) ?? []).map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-sm font-semibold text-foreground/90">
                View details →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div>
        <Button asChild variant="secondary" href="/courses">
          Browse all courses
        </Button>
      </div>
    </div>
  );
}


