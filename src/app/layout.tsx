import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

// Open-source stand-in for Anthropic's Copernicus / Tiempos Headline display serif.
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-display"
});

// Code-window mockups (Claude's signature product chrome).
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono"
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Monk Technologies — AI Training",
    template: "%s — Monk Technologies"
  },
  description:
    "Training-first AI education. Hands-on MLOps and GenAI programs designed for real projects and real outcomes.",
  openGraph: {
    type: "website",
    title: "Monk Technologies — AI Training",
    description:
      "Training-first AI education. Hands-on MLOps and GenAI programs designed for real projects and real outcomes.",
    url: siteUrl
  },
  twitter: {
    card: "summary_large_image",
    title: "Monk Technologies — AI Training",
    description:
      "Training-first AI education. Hands-on MLOps and GenAI programs designed for real projects and real outcomes."
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
        <div className="relative min-h-dvh overflow-x-clip">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_12%_-5%,rgba(204,120,92,.07),transparent_60%),radial-gradient(900px_circle_at_90%_8%,rgba(232,165,90,.06),transparent_55%)]" />
          </div>

          <SiteNavbar />
          <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-8 sm:px-6 sm:pt-10">
            {children}
          </main>
          <SiteFooter />
          <WhatsAppFloatingButton />
        </div>
      </body>
    </html>
  );
}


