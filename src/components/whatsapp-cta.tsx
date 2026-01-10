import { Button } from "@/components/ui/button";

export function WhatsAppCTA() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 shadow-glow sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(255,92,128,.22),transparent_60%),radial-gradient(900px_circle_at_80%_80%,rgba(255,152,80,.2),transparent_60%)]"
      />
      <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
            Contact
          </p>
          <h3 className="text-balance text-2xl font-semibold tracking-tight">
            Ready to join the next cohort?
          </h3>
          <p className="max-w-2xl text-balance text-sm text-mutedForeground sm:text-base">
            Tell us your background and goals—we’ll recommend the best learning
            path and share the enrollment details.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            href="https://wa.link/nprk9l"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </Button>
          <Button asChild size="lg" variant="secondary" href="/courses">
            View courses
          </Button>
        </div>
      </div>
    </section>
  );
}


