import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 shadow-glow sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,92,128,.35),transparent_60%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,152,80,.28),transparent_60%)] blur-2xl"
      />

      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_.85fr]">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Hands-on</Badge>
            <Badge>Job-ready</Badge>
            <Badge>GenAI + MLOps</Badge>
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Become the person who can <span className="text-[hsl(var(--primary))]">ship AI</span>
            .
          </h1>

          <p className="max-w-xl text-balance text-base text-mutedForeground sm:text-lg">
            Monk Technologies is a training-first AI company. We help learners
            master MLOps and GenAI with project-driven curricula and modern
            tooling.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" href="/courses">
              Explore courses
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              href="https://wa.link/nprk9l"
              target="_blank"
              rel="noreferrer"
            >
              Ask about enrollment
            </Button>
          </div>

          <div className="grid max-w-xl grid-cols-3 gap-3 pt-2 text-sm">
            <div className="rounded-xl border border-border bg-background/30 p-3">
              <p className="font-semibold">Projects</p>
              <p className="mt-1 text-xs text-mutedForeground">
                Build portfolio-grade systems
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background/30 p-3">
              <p className="font-semibold">Mentorship</p>
              <p className="mt-1 text-xs text-mutedForeground">
                Feedback loops that compound
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background/30 p-3">
              <p className="font-semibold">Outcomes</p>
              <p className="mt-1 text-xs text-mutedForeground">
                Learn what real teams need
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-2xl bg-[conic-gradient(from_210deg,rgba(255,92,128,.55),rgba(255,152,80,.5),rgba(255,92,128,.55))] blur-2xl opacity-40" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background/40 p-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-muted ring-1 ring-border">
                <Image
                  src="/brand/monk-logo.svg"
                  alt="Monk logo"
                  fill
                  sizes="48px"
                  className="object-contain p-2"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">Monk Technologies</p>
                <p className="text-xs text-mutedForeground">
                  Training that feels like building
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-border bg-card/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
                  Next cohort
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight">
                  MLOps & GenAI
                </p>
                <p className="mt-1 text-sm text-mutedForeground">
                  End-to-end—from data to deployment.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
                  What you’ll build
                </p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    Retrieval-Augmented Generation (RAG) app
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    CI/CD for model & prompt changes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                    Monitoring & evaluation dashboards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


