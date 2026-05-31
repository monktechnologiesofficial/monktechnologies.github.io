import { Button } from "@/components/ui/button";

export function WhatsAppCTA() {
  return (
    <section className="overflow-hidden rounded-2xl bg-primary px-6 py-12 text-primaryForeground sm:px-12 sm:py-16">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
            Contact
          </p>
          <h3 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            Ready to join the next cohort?
          </h3>
          <p className="max-w-2xl text-balance text-sm text-white/85 sm:text-base">
            Tell us your background and goals—we’ll recommend the best learning
            path and share the enrollment details.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            variant="secondary"
            href="https://wa.link/nprk9l"
            target="_blank"
            rel="noreferrer"
            className="border-0 ring-0"
          >
            Chat on WhatsApp
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            href="/courses"
            className="text-white ring-1 ring-white/40 hover:bg-white/10"
          >
            View courses
          </Button>
        </div>
      </div>
    </section>
  );
}
