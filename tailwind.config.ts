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
        surfaceDark: "hsl(var(--surface-dark))",
        onDark: "hsl(var(--on-dark))",
        onDarkSoft: "hsl(var(--on-dark-soft))"
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"]
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        // Claude is color-block first, shadows rare: a hairline ring + faint lift.
        glow: "0 0 0 1px hsl(var(--border)), 0 1px 2px rgba(20,20,19,.04), 0 10px 30px -20px rgba(20,20,19,.15)"
      }
    }
  },
  plugins: [typography]
} satisfies Config;


