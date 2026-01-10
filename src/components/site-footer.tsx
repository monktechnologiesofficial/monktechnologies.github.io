import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:px-6 md:grid-cols-3">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-tight">Monk Technologies</p>
          <p className="text-sm text-mutedForeground">
            Training-first AI education. Hands-on programs designed to ship real
            projects.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
              Learn
            </p>
            <Link className="block text-mutedForeground hover:text-foreground" href="/courses">
              Courses
            </Link>
            <Link className="block text-mutedForeground hover:text-foreground" href="/youtube">
              YouTube
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
              Company
            </p>
            <Link className="block text-mutedForeground hover:text-foreground" href="/about">
              About
            </Link>
            <Link className="block text-mutedForeground hover:text-foreground" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
            Contact
          </p>
          <a
            className="text-mutedForeground hover:text-foreground"
            href="https://wa.link/nprk9l"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="text-mutedForeground hover:text-foreground"
            href="https://www.youtube.com/@MTAlphaOfficial"
            target="_blank"
            rel="noreferrer"
          >
            YouTube: MTAlphaOfficial
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-xs text-mutedForeground sm:px-6">
          <p>© {new Date().getFullYear()} Monk Technologies. All rights reserved.</p>
          <p className="hidden sm:block">Built for speed. Designed for clarity.</p>
        </div>
      </div>
    </footer>
  );
}


