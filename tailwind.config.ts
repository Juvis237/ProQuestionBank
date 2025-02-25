import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import preline from "preline/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
        },
        "primary-dark": {
          DEFAULT: "hsl(var(--primary-dark))",
          // foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          foregroundWithOpacity:
            "hsl(var(--secondary-foreground-with-opacity))",
          "foreground-with-opacity-two":
            "hsl(var(--secondary-foreground-with-opacity-two))",
          light: "hsl(var(--secondary-light))",
        },
        orange_active: {
          DEFAULT: "hsl(var(--light-orange-active))",
          foreground: "hsl(var(--light-orange-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
          lime: "hsl(var(--success-lime))",
        },
        btn_primary: {
          DEFAULT: "hsl(var(--btn-primary))",
        },
        btn_secondary: {
          DEFAULT: "hsl(var(--btn-secondary))",
        },
        disabled: {
          DEFAULT: "hsl(var(--disabled-btn))",
          pwd: "hsl(var(--disabled))",
          "pwd-btn": "hsl(var(--btn-pwd))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [preline, tailwindcssAnimate],
} satisfies Config;

export default config;
