"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export function MobileNav({
  items,
  lmsUrl
}: {
  items: Array<{ href: string; label: string }>;
  lmsUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const label = useMemo(() => (open ? "Close menu" : "Open menu"), [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-card/40 ring-1 ring-border transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="sr-only">{label}</span>
        <span
          aria-hidden="true"
          className={cn(
            "relative block h-4 w-5",
            open ? "[&>i]:translate-y-0 [&>i:nth-child(1)]:rotate-45 [&>i:nth-child(2)]:opacity-0 [&>i:nth-child(3)]:-rotate-45" : ""
          )}
        >
          <i className="absolute left-0 top-0 h-0.5 w-5 rounded bg-foreground transition" />
          <i className="absolute left-0 top-1.5 h-0.5 w-5 rounded bg-foreground transition" />
          <i className="absolute left-0 top-3 h-0.5 w-5 rounded bg-foreground transition" />
        </span>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 transition",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-4 top-4 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-border bg-background/80 shadow-glow backdrop-blur",
            "transition-transform",
            open ? "translate-y-0" : "-translate-y-2"
          )}
        >
          <div className="p-3">
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-mutedForeground">
              Menu
            </p>
            <div className="grid gap-1">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
                >
                  {it.label}
                </Link>
              ))}
              <a
                href={lmsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-card px-3 py-3 text-sm font-semibold text-foreground ring-1 ring-border transition hover:bg-muted"
              >
                Sign In
              </a>
              <a
                href="https://wa.link/nprk9l"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-primary px-3 py-3 text-sm font-semibold text-primaryForeground transition hover:brightness-110"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


