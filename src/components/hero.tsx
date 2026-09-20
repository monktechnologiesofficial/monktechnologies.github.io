import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NeuralField } from "@/components/neural-field";
import { homeCopy } from "@/content/copy";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="space-y-12">
      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_.85fr]">
        <div className="space-y-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Black AI academy</Badge>
            <Badge>MLOps + GenAI</Badge>
            <Badge>Job-focused</Badge>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">
            {homeCopy.eyebrow}
          </p>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Lead the AI revolution
            <span className="text-electric">—not just join it.</span>
          </h1>

          <p className="max-w-xl text-balance text-base font-medium text-foreground sm:text-lg">
            {homeCopy.subheadline}
          </p>

          <div className="max-w-xl space-y-3 text-sm text-mutedForeground sm:text-base">
            {homeCopy.heroBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {homeCopy.ctas.community}
            </Button>
            <Button
              asChild
              size="lg"
              variant="blue"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              {homeCopy.ctas.seat}
            </Button>
            <Button asChild size="lg" variant="secondary" href="/youtube">
              {homeCopy.ctas.startFree}
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-surfaceDark p-6 shadow-glow sm:p-8">
          <NeuralField className="pointer-events-none absolute -right-8 -top-6 h-64 w-full opacity-70" />
          <div className="relative space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
              In the room
            </p>
            <p className="font-display text-2xl font-bold text-onDark">
              Builders. Critics. Operators.
            </p>
            <p className="text-sm text-onDarkSoft">
              Students, career switchers, founders, and working professionals
              training to ship AI—and to question it.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Ages", value: "18–60+" },
                { label: "Regions", value: "US + diaspora" },
                { label: "Entry", value: "Beginner-ready" },
                { label: "Focus", value: "Systems that ship" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                >
                  <p className="text-[11px] uppercase tracking-wide text-onDarkSoft">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-onDark">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex -space-x-2" aria-hidden="true">
              {["#4a2c1a", "#7a4a2a", "#c48a5a", "#1a1a5e", "#2e1a12", "#8d5a3a"].map(
                (color) => (
                  <span
                    key={color}
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-surfaceDark"
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
            <p className="text-xs text-onDarkSoft">
              Representation across skin tone, hair, gender, and lived experience.
              Real community photos go here as permissions land.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
