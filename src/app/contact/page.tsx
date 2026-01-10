import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
          Contact
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Let’s talk.
        </h1>
        <p className="max-w-2xl text-balance text-mutedForeground">
          WhatsApp is the fastest way to reach us—tell us your background and
          what you want to learn.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-glow sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight">
          Chat on WhatsApp
        </h2>
        <p className="mt-2 text-sm text-mutedForeground">
          We’ll respond with course details, cohort dates, pricing, and a
          recommended path.
        </p>
        <div className="mt-5">
          <Button
            asChild
            size="lg"
            href="https://wa.link/nprk9l"
            target="_blank"
            rel="noreferrer"
          >
            Open WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}


