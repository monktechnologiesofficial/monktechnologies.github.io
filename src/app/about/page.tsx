import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <div className="grid items-start gap-8 md:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
            About
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Training that feels like building.
          </h1>
          <p className="max-w-2xl text-balance text-mutedForeground">
            Monk Technologies is a training-first company focused on hands-on
            AI education. We turn complex topics—MLOps, GenAI, deployment—into
            guided projects you can actually ship.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge className="bg-background/20">Practical</Badge>
            <Badge className="bg-background/20">Project-driven</Badge>
            <Badge className="bg-background/20">Outcome-focused</Badge>
          </div>
          <div className="pt-3">
            <Button
              asChild
              href="https://wa.link/nprk9l"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 shadow-glow">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(204,120,92,.25),transparent_60%)] blur-2xl"
          />
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
                From curiosity to capability.
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-mutedForeground">
            <p>
              Our approach: teach the modern stack, build real projects, iterate
              with feedback, and explain the “why” behind every decision.
            </p>
            <p>
              If you’re aiming for interviews, promotions, or launching your own
              AI product—this is the fastest way to become credible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


