import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        cardForeground: "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        mutedForeground: "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        primaryForeground: "hsl(var(--primary-foreground))",
        accent: "hsl(var(--accent))",
        accentForeground: "hsl(var(--accent-foreground))",
        surfaceDark: "hsl(var(--surface-dark))",
        onDark: "hsl(var(--on-dark))",
        onDarkSoft: "hsl(var(--on-dark-soft))",
        gold: "hsl(var(--gold))",
        electric: "hsl(var(--blue))",
        success: "hsl(var(--green))"
      },
      fontFamily: {
        display: ["var(--font-display)", "Archivo", "Inter", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"]
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--border)), 0 1px 2px rgba(26,26,94,.06), 0 18px 40px -24px rgba(26,26,94,.35)"
      }
    }
  },
  plugins: [typography]
} satisfies Config;
