import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { CourseGridPreview } from "@/components/course-grid-preview";
import { EnrollmentCTA } from "@/components/enrollment-cta";
import { Testimonials } from "@/components/testimonials";
import { CommunityMosaic } from "@/components/community-mosaic";
import { CommunityPhoto } from "@/components/community-photo";
import { WhatsAppJoin } from "@/components/whatsapp-join";
import { homeCopy } from "@/content/copy";
import { photoCredit, photos } from "@/content/photos";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />

      <Section
        eyebrow="In the work"
        title="A community that builds out loud"
        description="Home offices, coworking tables, whiteboards, and late-night pair sessions. This is what the room looks like."
      >
        <CommunityMosaic />
      </Section>

      <Section eyebrow="Why Monk Technologies" title={homeCopy.whyTitle}>
        <div className="grid items-start gap-8 md:grid-cols-[.9fr_1.1fr]">
          <CommunityPhoto
            src={photos.critique.src}
            alt={photos.critique.alt}
            className="aspect-[4/5] md:aspect-[3/4]"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="space-y-6">
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
        description="Learner words, unedited. Portrait stand-ins until we have permission to publish names and photos."
      >
        <Testimonials />
      </Section>

      <WhatsAppJoin heading="Scan to join the community" />

      <EnrollmentCTA />
      <p className="text-center text-xs text-mutedForeground">{photoCredit}</p>
    </div>
  );
}
