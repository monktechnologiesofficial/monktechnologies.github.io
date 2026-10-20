import { Button } from "@/components/ui/button";
import { WhatsAppJoin } from "@/components/whatsapp-join";
import { contactCopy } from "@/content/copy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Monk Technologies online AI training institute. Ready to join our AI, MLOps, or GenAI courses? Tell us your background and goals—we'll recommend a path.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://monk-technologies.com"}/contact`
  }
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

      <WhatsAppJoin heading="Scan or tap to join the group" />
      <Button asChild size="lg" variant="blue" href="/courses">
        Save Your Seat →
      </Button>
    </div>
  );
}
