import type { Metadata } from "next";
import { Inter, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";
import { Analytics } from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono"
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

const description =
  "AI training institute in Bengaluru, India offering hands-on MLOps, GenAI, and Python courses. Project-driven bootcamps with expert instructors. Learn AI/ML with real-world applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Monk Technologies — AI Training Institute in Bangalore, India",
    template: "%s — Monk Technologies"
  },
  description,
  keywords: [
    "AI training institute",
    "AI training institute in Bangalore",
    "AI training institute in India",
    "generative AI course",
    "MLOps course",
    "prompt engineering course",
    "AI bootcamp",
    "GenAI training",
    "machine learning course Bangalore",
    "AI course India",
    "Monk Technologies"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    title: "Monk Technologies — AI Training Institute in Bangalore, India",
    description,
    url: siteUrl,
    siteName: "Monk Technologies",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Monk Technologies — AI Training Institute in Bangalore, India",
    description,
    site: "@MonkTechnologies"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${display.variable} ${mono.variable}`}
    >
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primaryForeground"
        >
          Skip to content
        </a>
        <div className="relative min-h-dvh overflow-x-clip">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 neural-grid"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_8%_-10%,rgba(0,102,255,.10),transparent_55%),radial-gradient(800px_circle_at_92%_0%,rgba(255,184,0,.12),transparent_50%)]"
          />

          <SiteNavbar />
          <main
            id="main"
            className="mx-auto w-full max-w-6xl px-5 pb-24 pt-8 sm:px-6 sm:pt-10"
          >
            {children}
          </main>
          <SiteFooter />
          <WhatsAppFloatingButton />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
