import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-surfaceDark text-onDarkSoft">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-6 md:grid-cols-3">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-tight text-onDark">Monk Technologies</p>
          <p className="text-sm text-onDarkSoft">
            Training-first AI education. Hands-on programs designed to ship real
            projects.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-onDarkSoft">
              Learn
            </p>
            <Link className="block text-onDarkSoft transition hover:text-onDark" href="/courses">
              Courses
            </Link>
            <Link className="block text-onDarkSoft transition hover:text-onDark" href="/youtube">
              YouTube
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-onDarkSoft">
              Company
            </p>
            <Link className="block text-onDarkSoft transition hover:text-onDark" href="/about">
              About
            </Link>
            <Link className="block text-onDarkSoft transition hover:text-onDark" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-onDarkSoft">
            Contact
          </p>
          <a
            className="block text-onDarkSoft transition hover:text-onDark"
            href="https://wa.link/nprk9l"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="block text-onDarkSoft transition hover:text-onDark"
            href="https://www.youtube.com/@MTAlphaOfficial"
            target="_blank"
            rel="noreferrer"
          >
            YouTube: MTAlphaOfficial
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-xs text-onDarkSoft sm:px-6">
          <p>© {new Date().getFullYear()} Monk Technologies. All rights reserved.</p>
          <p className="hidden sm:block">Built for speed. Designed for clarity.</p>
        </div>
      </div>
    </footer>
  );
}
