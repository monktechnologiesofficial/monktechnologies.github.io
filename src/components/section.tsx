import { Button } from "@/components/ui/button";

type Action = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function Section({
  eyebrow,
  title,
  description,
  actions,
  children
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: Action[];
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="space-y-2">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-wide text-mutedForeground">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-balance text-sm text-mutedForeground sm:text-base">
              {description}
            </p>
          ) : null}
        </div>

        {actions?.length ? (
          <div className="flex flex-wrap gap-2">
            {actions.map((a) => (
              <Button
                key={a.href}
                asChild
                href={a.href}
                variant={a.variant ?? "primary"}
              >
                {a.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>

      <div>{children}</div>
    </section>
  );
}


