import { CommunityPhoto } from "@/components/community-photo";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.initials}
          className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-glow"
        >
          <div className="flex items-center gap-3">
            <CommunityPhoto
              src={t.photo.src}
              alt={t.photo.alt}
              className="h-14 w-14 shrink-0"
              rounded="rounded-full"
              sizes="56px"
            />
            <figcaption>
              <p className="text-sm font-semibold">
                {t.initials}, {t.role}
              </p>
              <p className="text-xs text-mutedForeground">{t.context}</p>
            </figcaption>
          </div>
          <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-mutedForeground">
            “{t.quote}”
          </blockquote>
          <p className="mt-4 text-sm font-medium">
            — {t.initials}, {t.role}
          </p>
        </figure>
      ))}
    </div>
  );
}
