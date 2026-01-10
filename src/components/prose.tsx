import { cn } from "@/lib/cn";

export function Prose({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "prose prose-invert max-w-none",
        "prose-headings:tracking-tight prose-headings:text-foreground",
        "prose-p:text-mutedForeground",
        "prose-strong:text-foreground",
        "prose-a:text-[hsl(var(--primary))] prose-a:no-underline hover:prose-a:underline",
        "prose-hr:border-border",
        "prose-code:text-foreground prose-code:before:content-[''] prose-code:after:content-['']",
        "prose-pre:border prose-pre:border-border prose-pre:bg-background/40",
        "prose-blockquote:border-border prose-blockquote:text-mutedForeground",
        className
      )}
    >
      {children}
    </div>
  );
}


