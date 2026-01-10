"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.link/nprk9l"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-50 flex h-12 items-center gap-2 rounded-2xl bg-primary px-4 text-sm font-semibold text-primaryForeground shadow-glow transition",
        "hover:brightness-110 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      )}
    >
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/90" />
      WhatsApp
    </a>
  );
}


