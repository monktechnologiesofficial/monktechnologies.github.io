import { Button } from "@/components/ui/button";
import { contactCopy } from "@/content/copy";
import { WHATSAPP_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready to join the next Monk Technologies cohort? Tell us your background and goals—we'll recommend a path."
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-electric">
          Contact
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
          {contactCopy.headline}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-mutedForeground">
          {contactCopy.body}
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-glow sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight">
          Chat on WhatsApp
        </h2>
        <p className="mt-2 text-sm text-mutedForeground">
          Fastest path to cohort dates, pricing, and a recommended course.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Join the Community →
          </Button>
          <Button asChild size="lg" variant="blue" href="/courses">
            Save Your Seat →
          </Button>
        </div>
      </div>
    </div>
  );
}
