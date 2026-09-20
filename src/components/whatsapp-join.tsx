import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WHATSAPP_QR, WHATSAPP_URL } from "@/lib/site";

export function WhatsAppJoin({
  heading = "Join the WhatsApp group"
}: {
  heading?: string;
}) {
  return (
    <div className="grid items-center gap-8 rounded-2xl border border-border bg-card p-6 shadow-glow sm:p-8 md:grid-cols-[1fr_auto]">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-electric">
          GenAI, ML — Potential
        </p>
        <h2 className="text-2xl font-bold tracking-tight">{heading}</h2>
        <p className="max-w-xl text-sm leading-relaxed text-mutedForeground">
          Scan the QR with your WhatsApp camera, or tap the button to join Monk
          Technologies — GenAI, ML — Potential.
        </p>
        <Button asChild size="lg" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Join the Community →
        </Button>
      </div>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="justify-self-center"
      >
        <Image
          src={WHATSAPP_QR}
          alt="QR code to join the Monk Technologies GenAI, ML WhatsApp group"
          width={280}
          height={312}
          className="h-auto w-56 rounded-xl bg-white p-2 shadow-glow sm:w-64"
        />
      </a>
    </div>
  );
}
