import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { CourseGridPreview } from "@/components/course-grid-preview";
import { LiteYouTubeEmbed } from "@/components/lite-youtube-embed";
import { EnrollmentCTA } from "@/components/enrollment-cta";
import { Testimonials } from "@/components/testimonials";
import { homeCopy } from "@/content/copy";
import { YOUTUBE_URL } from "@/lib/site";

const YT_FEATURED = ["dioyxSaVFmw", "NOpK2otUxus"];

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />

      <Section eyebrow="Why Monk Technologies" title={homeCopy.whyTitle}>
        <div className="grid gap-8 md:grid-cols-[1.15fr_.85fr]">
          <div className="space-y-4 text-base leading-relaxed text-mutedForeground">
            {homeCopy.whyBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="grid gap-3">
            {homeCopy.benefits.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-mutedForeground">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Courses"
        title="Hands-on programs built to ship"
        description="Production habits, modern GenAI tooling, and the engineering depth to deploy with confidence."
      >
        <CourseGridPreview />
      </Section>

      <Section
        eyebrow="Community"
        title="What our community says"
        description="Learner words, unedited. We use initials until we have permission to publish names and photos."
      >
        <Testimonials />
      </Section>

      <Section
        eyebrow="YouTube"
        title="Start free on MLOps and GenAI"
        description="Short, practical videos—preview the teaching style before you enroll."
        actions={[
          {
            label: "Start Free →",
            href: YOUTUBE_URL,
            variant: "secondary",
            target: "_blank",
            rel: "noreferrer"
          }
        ]}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {YT_FEATURED.map((id) => (
            <LiteYouTubeEmbed key={id} videoId={id} />
          ))}
        </div>
      </Section>

      <EnrollmentCTA />
    </div>
  );
}
