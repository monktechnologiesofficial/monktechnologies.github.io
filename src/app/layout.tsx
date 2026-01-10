import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="relative min-h-dvh overflow-x-clip">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_10%_0%,rgba(255,92,128,.25),transparent_60%),radial-gradient(900px_circle_at_90%_10%,rgba(255,152,80,.22),transparent_55%),radial-gradient(900px_circle_at_40%_95%,rgba(255,44,128,.18),transparent_55%)]" />
            <div className="noise absolute inset-0" />
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


