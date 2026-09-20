import { Button } from "@/components/ui/button";
import { hubPosts, pioneers, resourceLinks } from "@/content/resources";
import { WHATSAPP_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black in AI",
  description:
    "Black in AI resources, pioneers, and a hub for Black learners in tech—from Monk Technologies."
};

export default function ResourcesPage() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-electric">
          Black in AI
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
          The people and ideas that make this possible.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-mutedForeground">
          A living resource hub for Black learners in AI. We feature pioneers,
          communities, and essays that treat you as a builder and a critic—not
          a diversity statistic.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Pioneers</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {pioneers.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-electric"
            >
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-mutedForeground">{p.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Communities and institutes</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {resourceLinks.map((r) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-gold"
            >
              <h3 className="font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-mutedForeground">{r.body}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">From the hub</h2>
        <p className="max-w-2xl text-sm text-mutedForeground">
          Essays we want in circulation. Full posts will live here as they are
          published—titles below are the editorial lane, not filler bylines.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {hubPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-border bg-muted p-6"
            >
              <h3 className="font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-mutedForeground">{post.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button asChild href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Join the Community →
        </Button>
        <Button asChild variant="secondary" href="/courses">
          Browse courses
        </Button>
      </div>
    </div>
  );
}
