import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CommunityPhoto } from "@/components/community-photo";
import { homeCopy } from "@/content/copy";
import { photos } from "@/content/photos";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="space-y-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="space-y-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Community-first</Badge>
            <Badge>MLOps + GenAI</Badge>
            <Badge>Job-focused</Badge>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">
            {homeCopy.eyebrow}
          </p>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Lead the AI revolution
            <span className="text-electric">—not just join it.</span>
          </h1>

          <p className="max-w-xl text-balance text-base font-medium text-foreground sm:text-lg">
            {homeCopy.subheadline}
          </p>

          <div className="max-w-xl space-y-3 text-sm text-mutedForeground sm:text-base">
            {homeCopy.heroBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
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
            <Button asChild size="lg" variant="secondary" href="/community">
              {homeCopy.ctas.startFree}
            </Button>
          </div>
        </div>

        <figure className="space-y-3">
          <CommunityPhoto
            src={photos.heroCohort.src}
            alt={photos.heroCohort.alt}
            priority
            className="aspect-[4/3] shadow-glow sm:aspect-[5/4]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <figcaption className="text-xs text-mutedForeground">
            Builders in the room—ready to ship and ready to question the model.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
