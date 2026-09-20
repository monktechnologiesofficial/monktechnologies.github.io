import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/cn";

const tones = {
  gold: "bg-gold text-primaryForeground",
  blue: "bg-electric text-white",
  green: "bg-success text-white",
  indigo: "bg-surfaceDark text-onDark"
};

export function Testimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.initials}
          className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-glow"
        >
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "grid h-11 w-11 place-items-center rounded-full text-sm font-bold",
                tones[t.tone]
              )}
              aria-hidden="true"
            >
              {t.initials}
            </span>
            <figcaption>
              <p className="text-sm font-semibold">{t.attribution}</p>
              <p className="text-xs text-mutedForeground">{t.context}</p>
            </figcaption>
          </div>
          <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-mutedForeground">
            “{t.quote}”
          </blockquote>
        </figure>
      ))}
    </div>
  );
}
