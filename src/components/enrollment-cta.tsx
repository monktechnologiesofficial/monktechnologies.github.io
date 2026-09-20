import { Button } from "@/components/ui/button";
import { homeCopy } from "@/content/copy";
import { WHATSAPP_URL } from "@/lib/site";

export function EnrollmentCTA() {
  return (
    <section className="overflow-hidden rounded-2xl bg-surfaceDark px-6 py-12 text-onDark sm:px-12 sm:py-16">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
            Next cohort
          </p>
          <h3 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {homeCopy.contactTitle}
          </h3>
          <p className="max-w-2xl text-balance text-sm text-onDarkSoft sm:text-base">
            {homeCopy.contactBody}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
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
          <Button
            asChild
            size="lg"
            variant="ghost"
            href="/courses"
            className="text-onDark ring-1 ring-white/25 hover:bg-white/10"
          >
            View courses
          </Button>
        </div>
      </div>
    </section>
  );
}
