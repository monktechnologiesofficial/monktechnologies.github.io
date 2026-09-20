import { Button } from "@/components/ui/button";
import { WhatsAppJoin } from "@/components/whatsapp-join";
import { contactCopy } from "@/content/copy";
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

      <WhatsAppJoin heading="Scan or tap to join the group" />
      <Button asChild size="lg" variant="blue" href="/courses">
        Save Your Seat →
      </Button>
    </div>
  );
}
