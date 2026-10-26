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
        "prose max-w-none",
        "prose-headings:tracking-tight prose-headings:text-foreground",
        "prose-p:text-foreground",
        "prose-li:text-foreground",
        "prose-ul:text-foreground",
        "prose-ol:text-foreground",
        "prose-strong:text-foreground prose-strong:font-semibold",
        "prose-em:text-foreground",
        "prose-a:text-[hsl(var(--primary))] prose-a:font-medium prose-a:no-underline hover:prose-a:underline",
        "prose-hr:border-border",
        "prose-code:text-foreground prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-medium prose-code:before:content-[''] prose-code:after:content-['']",
        "prose-pre:border prose-pre:border-border prose-pre:bg-background/40 prose-pre:text-foreground",
        "prose-blockquote:border-border prose-blockquote:text-foreground prose-blockquote:font-normal",
        "prose-table:text-foreground",
        "prose-thead:text-foreground prose-thead:border-border",
        "prose-tbody:text-foreground",
        "prose-tr:border-border",
        "prose-th:text-foreground prose-th:font-semibold",
        "prose-td:text-foreground",
        "prose-figcaption:text-foreground",
        "prose-img:rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
}


