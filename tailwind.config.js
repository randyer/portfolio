/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Playfair: ["Playfair"],
      Roboto: ["Roboto"],
      Outfit: ["Outfit"],
      Dancing: ["Dancing Script"],
      Shadows: ["Shadows Into Light"],
      Indie: ["Indie Flower"],
    },
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "21/9": "21 / 9",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        darkGreen: "rgb(0 66 43 / <alpha-value>)",
        gold: "hsl(var(--gold))",
        cream: "rgb(255 249 224 / <alpha-value>)",
        orange: "rgb(254 110 53 / <alpha-value>)",
        purple: "rgb(107 76 96 / <alpha-value>)",
        warning: "hsl(var(--warning))",
        "warning-foreground": "hsl(var(--warning-foreground))",
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
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },

      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // Block reveal effect
        reveal: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideIn: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        slideOut: {
          "0%": { width: "100%", left: "0" }, // Start with full width
          "100%": { width: "0%", left: "100%" }, // Move the left side to the right
        },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      // Custom block reveal and fade-in animations
      "block-reveal": "reveal 1s ease-out forwards",
      "fade-in": "fadeIn 1.5s ease-in forwards",
      "fade-out": "fadeOut 1.5s ease-in forwards",
      "slide-in": "slideIn 0.6s ease-in forwards",
      "slide-out": "slideOut 0.6s ease-out forwards",
    },
  },

  plugins: [require("tailwindcss-animate")],
};
