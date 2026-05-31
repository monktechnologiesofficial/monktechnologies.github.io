import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { CourseGridPreview } from "@/components/course-grid-preview";
import { LiteYouTubeEmbed } from "@/components/lite-youtube-embed";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

const YT_FEATURED = ["dioyxSaVFmw", "NOpK2otUxus"];

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />

      <Section
        eyebrow="Courses"
        title="Hands-on programs built for real outcomes"
        description="We teach the stuff that ships: production habits, modern GenAI tooling, and the engineering depth to deploy confidently."
      >
        <CourseGridPreview />
      </Section>

      <Section
        eyebrow="YouTube"
        title="Free lessons on MLOps and GenAI"
        description="Short, practical videos—perfect to preview our teaching style before you enroll."
        actions={[
          {
            label: "Visit MTAlphaOfficial",
            href: "https://www.youtube.com/@MTAlphaOfficial",
            variant: "secondary"
          }
        ]}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {YT_FEATURED.map((id) => (
            <LiteYouTubeEmbed key={id} videoId={id} />
          ))}
        </div>
      </Section>

      <WhatsAppCTA />
    </div>
  );
}


