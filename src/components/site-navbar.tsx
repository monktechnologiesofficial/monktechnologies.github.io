import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { MobileNav } from "@/components/mobile-nav";

const NAV = [
  { href: "/courses", label: "Courses" },
  { href: "/youtube", label: "YouTube" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-muted ring-1 ring-border">
            <Image
              src="/brand/monk-logo.svg"
              alt="Monk Technologies"
              fill
              sizes="36px"
              className="object-contain p-1.5"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">
              Monk Technologies
            </p>
            <p className="text-xs text-mutedForeground">
              Training-first AI education
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm text-mutedForeground transition hover:bg-muted hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            href="https://wa.link/nprk9l"
            target="_blank"
            rel="noreferrer"
            size="md"
            className="hidden md:inline-flex"
          >
            Chat on WhatsApp
          </Button>
          <MobileNav items={NAV} />
        </div>
      </div>
    </header>
  );
}


