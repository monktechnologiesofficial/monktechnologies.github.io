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
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition hover:border-[hsl(var(--primary))]"
          >
            <div className="flex flex-wrap items-center gap-2">
              {c.duration ? <Badge>{c.duration}</Badge> : null}
              {c.level ? <Badge>{c.level}</Badge> : null}
            </div>
            <div>
              <p className="font-display text-2xl font-medium tracking-tight">
                {c.title}
              </p>
              <p className="mt-1 text-sm text-mutedForeground">
                A modern curriculum that teaches what real teams use.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-mutedForeground">
              {(c.highlights?.slice(0, 3) ?? []).map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2 text-sm font-medium text-[hsl(var(--primary))]">
              View details →
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


