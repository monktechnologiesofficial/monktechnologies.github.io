import { Button } from "@/components/ui/button";
import { CommunityPhoto } from "@/components/community-photo";
import { WhatsAppJoin } from "@/components/whatsapp-join";
import { communityCopy } from "@/content/copy";
import { photoCredit, photos } from "@/content/photos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Monk Technologies community of builders, mentors, and alumni. WhatsApp is the front door."
};

const gallery = [
  photos.table,
  photos.pairBuilding,
  photos.familyTech,
  photos.teaching,
  photos.codeEditor,
  photos.learnerCoding
];

export default function CommunityPage() {
  return (
    <div className="space-y-12">
      <div className="grid items-start gap-8 md:grid-cols-[1.1fr_.9fr]">
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
        <CommunityPhoto
          src={photos.table.src}
          alt={photos.table.alt}
          className="aspect-[16/10] shadow-glow"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>

      <WhatsAppJoin />

      <div className="grid gap-4 md:grid-cols-2">
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

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">In community</h2>
        <p className="max-w-2xl text-sm text-mutedForeground">
          Coworking, presenting, coding, teaching. Replace these stand-ins with
          Monk photos as permissions land.
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((p) => (
            <CommunityPhoto
              key={p.src}
              src={p.src}
              alt={p.alt}
              className="aspect-[4/3]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          ))}
        </div>
      </section>

      <div className="rounded-2xl bg-surfaceDark p-8 text-onDark sm:p-10">
        <h2 className="text-2xl font-bold">How the room feels</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-onDarkSoft">
          We do not publish member counts we cannot stand behind. What we can
          say: this is a working community—questions get answers, projects get
          critique, and nobody has to translate their full self at the door.
          Cohort dates and live sessions land in WhatsApp.
        </p>
      </div>
      <p className="text-xs text-mutedForeground">{photoCredit}</p>
    </div>
  );
}
