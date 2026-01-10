import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    asChild?: false;
  };

type ButtonAsLink = CommonProps & {
  asChild: true;
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

  const sizes: Record<ButtonSize, string> = {
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-sm"
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-primaryForeground shadow-glow hover:brightness-110 active:brightness-95",
    secondary:
      "bg-card text-foreground ring-1 ring-border hover:bg-muted active:bg-card",
    ghost: "text-foreground hover:bg-muted active:bg-card"
  };

  const className = cn(base, sizes[size], variants[variant], props.className);

  if ("asChild" in props && props.asChild) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={className}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={className}
      type={props.type ?? "button"}
    />
  );
}


