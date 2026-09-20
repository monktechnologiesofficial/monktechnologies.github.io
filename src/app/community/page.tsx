import { Button } from "@/components/ui/button";
import { communityCopy } from "@/content/copy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Monk Technologies community of Black AI builders, mentors, and alumni. WhatsApp is the front door."
};

export default function CommunityPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-electric">
          Community
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
          {communityCopy.headline}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-mutedForeground">
          {communityCopy.body}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {communityCopy.channels.map((ch) => (
          <div
            key={ch.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-glow"
          >
            <h2 className="text-lg font-semibold">{ch.name}</h2>
            <p className="mt-2 flex-1 text-sm text-mutedForeground">
              {ch.description}
            </p>
            <div className="mt-5">
              <Button
                asChild
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {ch.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-surfaceDark p-8 text-onDark sm:p-10">
        <h2 className="text-2xl font-bold">How the room feels</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-onDarkSoft">
          We do not publish member counts we cannot stand behind. What we can
          say: this is a working community—questions get answers, projects get
          critique, and nobody has to translate their full self at the door.
        </p>
      </div>
    </div>
  );
}
