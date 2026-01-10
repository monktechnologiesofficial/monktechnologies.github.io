"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

export function LiteYouTubeEmbed({
  videoId,
  title
}: {
  videoId: string;
  title?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ytTitle = title ?? "YouTube video";

  const src = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: "1",
      modestbranding: "1",
      rel: "0"
    });
    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  }, [videoId]);

  return (
    <div
      className={cn(
        "group relative aspect-video overflow-hidden rounded-2xl border border-border bg-card/40 shadow-glow"
      )}
    >
      {!isLoaded ? (
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 grid place-items-center"
          aria-label={`Play: ${ytTitle}`}
        >
          <Image
            alt={ytTitle}
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-85 transition group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent" />
          <div className="relative grid place-items-center gap-3 px-6 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur transition group-hover:bg-white/15">
              <span className="ml-1 inline-block h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white/90" />
            </span>
            <p className="text-sm font-semibold tracking-tight text-white/90">
              Watch on YouTube
            </p>
          </div>
        </button>
      ) : (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={ytTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}


