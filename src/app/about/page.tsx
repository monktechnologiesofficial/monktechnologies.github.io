import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { aboutCopy } from "@/content/copy";
import { WHATSAPP_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, values, and commitment of Monk Technologies, a Black AI academy training learners to build, critique, and lead."
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <div className="grid items-start gap-8 md:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-electric">
            About
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            {aboutCopy.headline}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-mutedForeground">
            {aboutCopy.mission}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Lead users of AI</Badge>
            <Badge>Project-driven</Badge>
            <Badge>Year-round</Badge>
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            <Button
              asChild
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Join the Community →
            </Button>
            <Button asChild variant="secondary" href="/courses">
              Save Your Seat →
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-glow">
          <div className="relative flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden">
              <Image
                src="/brand/monk-logo.png"
                alt="Monk logo"
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">
                Monk Technologies
              </p>
              <p className="text-sm text-mutedForeground">
                Training-first. Community-held.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-mutedForeground">
            We turn MLOps, GenAI, and deployment into guided projects you can
            actually ship—and into a practice of asking who a system serves.
          </p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Values</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {aboutCopy.values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mutedForeground">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Instructors and team
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-mutedForeground">
          We teach with Black instructors and mentors who have worked in tech
          as themselves. Named bios and photos will publish here with
          permission—no stock stand-ins.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Instructors",
              body: "Live sessions on MLOps, GenAI, RAG, and deployment—patient, thorough, production-minded."
            },
            {
              title: "Mentors",
              body: "Feedback on projects, interview prep, and how to carry yourself in rooms that were not built for you."
            },
            {
              title: "Community hosts",
              body: "WhatsApp and cohort spaces that stay warm, specific, and useful."
            }
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border bg-muted p-6"
            >
              <div
                className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-surfaceDark via-electric to-gold"
                aria-hidden="true"
              />
              <h3 className="font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-mutedForeground">{card.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
