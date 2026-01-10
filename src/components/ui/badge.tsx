import * as React from "react";
import { cn } from "@/lib/cn";

export function Badge({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground ring-1 ring-border",
        className
      )}
    >
      {children}
    </span>
  );
}


