import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CommunityPhoto } from "@/components/community-photo";
import { aboutCopy } from "@/content/copy";
import { photos } from "@/content/photos";
import { WHATSAPP_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, values, and team of Monk Technologies—training learners to build, critique, and lead."
};

const team = [
  {
    title: "Instructors",
    body: "Live sessions on MLOps, GenAI, RAG, and deployment—patient, thorough, production-minded.",
    photo: photos.instructorLocs
  },
  {
    title: "Mentors",
    body: "Feedback on projects, interview prep, and how to carry yourself in rooms that were not built for you.",
    photo: photos.mentorship
  },
  {
    title: "Community hosts",
    body: "WhatsApp and cohort spaces that stay warm, specific, and useful.",
    photo: photos.instructorOffice
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <div className="grid items-start gap-8 md:grid-cols-[1.15fr_.85fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-electric">
            About
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            {aboutCopy.headline}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-mutedForeground">
            {aboutCopy.mission}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Lead users of AI</Badge>
            <Badge>Project-driven</Badge>
            <Badge>Year-round</Badge>
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            <Button
              asChild
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Join the Community →
            </Button>
            <Button asChild variant="secondary" href="/courses">
              Save Your Seat →
            </Button>
          </div>
        </div>

        <CommunityPhoto
          src={photos.meeting.src}
          alt={photos.meeting.alt}
          className="aspect-[4/3] shadow-glow md:aspect-square"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Values</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {aboutCopy.values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mutedForeground">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Instructors and team
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-mutedForeground">
          We teach with instructors and mentors who have done this work as
          themselves—live sessions, project feedback, and a room that stays
          useful.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {team.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <CommunityPhoto
                src={card.photo.src}
                alt={card.photo.alt}
                className="aspect-[4/5]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-5">
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-mutedForeground">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
