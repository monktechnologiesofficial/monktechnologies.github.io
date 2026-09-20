import { LiteYouTubeEmbed } from "@/components/lite-youtube-embed";
import { Button } from "@/components/ui/button";

const VIDEOS = [
  { id: "dioyxSaVFmw", title: "Latest video" },
  { id: "NOpK2otUxus", title: "AI agents workflow" },
  { id: "nBHUnJZxs1k", title: "AI stock screener (n8n)" },
  { id: "sTdH8LeSRW0", title: "Live breakdown" }
];

export default function YouTubePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
          YouTube
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Start free on MTAlphaOfficial
        </h1>
        <p className="max-w-2xl text-balance text-mutedForeground">
          Practical MLOps and GenAI lessons. Watch how we teach, then step into
          a cohort when you are ready.
        </p>
        <div className="pt-2">
          <Button
            asChild
            href="https://www.youtube.com/@MTAlphaOfficial"
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            Start Free →
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {VIDEOS.map((v, idx) => (
          <LiteYouTubeEmbed
            key={`${v.id}-${idx}`}
            videoId={v.id}
            title={v.title}
          />
        ))}
      </div>
    </div>
  );
}


