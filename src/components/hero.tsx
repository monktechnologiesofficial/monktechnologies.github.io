import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="space-y-12">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Hands-on</Badge>
            <Badge>Job-ready</Badge>
            <Badge>GenAI + MLOps</Badge>
          </div>

          <h1 className="text-balance text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Become the person who can{" "}
            <span className="text-[hsl(var(--primary))]">ship AI</span>.
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
        </div>

        {/* Dark course mockup — preview the learning experience, not raw code. */}
        <CurriculumPanel />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { title: "Projects", body: "Build portfolio-grade systems" },
          { title: "Mentorship", body: "Feedback loops that compound" },
          { title: "Outcomes", body: "Learn what real teams need" }
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-border bg-card p-5">
            <p className="font-medium">{s.title}</p>
            <p className="mt-1 text-sm text-mutedForeground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const MODULES = [
  { label: "Foundations & tooling", state: "done" as const },
  { label: "Build a RAG app", state: "done" as const },
  { label: "CI/CD for models", state: "active" as const, progress: 45 },
  { label: "Monitoring & evals", state: "todo" as const },
  { label: "Capstone deployment", state: "todo" as const }
];

function CurriculumPanel() {
  return (
    <div className="overflow-hidden rounded-2xl bg-surfaceDark shadow-glow">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="ml-2 text-xs font-medium text-onDarkSoft">
          MLOps &amp; GenAI · your course
        </span>
      </div>

      <ol className="space-y-1 p-4">
        {MODULES.map((m, i) => (
          <li
            key={m.label}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5"
          >
            <span
              className={
                m.state === "done"
                  ? "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5db872] text-[11px] font-bold text-surfaceDark"
                  : m.state === "active"
                    ? "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[10px] text-white"
                    : "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20 text-[11px] text-onDarkSoft"
              }
            >
              {m.state === "done" ? "✓" : m.state === "active" ? "▸" : i + 1}
            </span>
            <span
              className={
                m.state === "todo"
                  ? "flex-1 text-sm text-onDarkSoft"
                  : "flex-1 text-sm text-onDark"
              }
            >
              {m.label}
            </span>
            {m.state === "active" ? (
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                  <span
                    className="block h-full rounded-full bg-[hsl(var(--primary))]"
                    style={{ width: `${m.progress}%` }}
                  />
                </span>
                <span className="font-mono text-xs text-onDarkSoft">
                  {m.progress}%
                </span>
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="flex items-center gap-5 border-t border-white/10 px-5 py-3 text-xs text-onDarkSoft">
        <span className="flex items-center gap-1.5">
          <span className="text-[#e8a55a]">🔥</span> 7-day streak
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-[hsl(var(--primary))]">★</span>
          <span className="font-mono">320</span> points
        </span>
      </div>
    </div>
  );
}
