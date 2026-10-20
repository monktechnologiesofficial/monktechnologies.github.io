import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { CourseGridPreview } from "@/components/course-grid-preview";
import { EnrollmentCTA } from "@/components/enrollment-cta";
import { Testimonials } from "@/components/testimonials";
import { CommunityMosaic } from "@/components/community-mosaic";
import { CommunityPhoto } from "@/components/community-photo";
import { WhatsAppJoin } from "@/components/whatsapp-join";
import { StructuredData } from "@/components/structured-data";
import { homeCopy } from "@/content/copy";
import { faqData } from "@/content/faq";
import { photos } from "@/content/photos";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://monk-technologies.com";

export default function HomePage() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Monk Technologies",
    description:
      "AI training institute in Bengaluru, India offering hands-on MLOps, GenAI, and Python courses. Project-driven bootcamps with expert instructors.",
    url: siteUrl,
    logo: `${siteUrl}/brand/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN"
    },
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    founder: {
      "@type": "Organization",
      name: "Monk Technologies"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl
      }
    ]
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <StructuredData data={[organizationData, breadcrumbData, faqSchemaData]} />
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
        description="Straight from the cohort. Unedited."
      >
        <Testimonials />
      </Section>

      <Section
        eyebrow="Frequently Asked Questions"
        title="Everything you need to know"
        description="Common questions about our AI training institute, courses, and enrollment."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {faqData.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-border bg-card/40 p-6"
            >
              <h3 className="font-semibold text-foreground">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mutedForeground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <WhatsAppJoin heading="Scan to join the community" />

      <EnrollmentCTA />
    </div>
    </>
  );
}
