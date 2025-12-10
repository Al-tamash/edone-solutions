import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "rgb(244, 150, 30)", // Orange
          secondary: "rgb(241, 100, 47)", // Red-Orange
          accent: "rgb(9, 164, 230)", // Blue
        },
        edone: {
          primary: {
            DEFAULT: "#F4961E",
            light: "#FCCE91",
            dark: "#C27610",
            50: "#FEF7EC",
            100: "#FDECD4",
            200: "#FBDAA9",
            300: "#F9C77E",
            400: "#F7B553",
            500: "#F4961E",
            600: "#D17C0C",
            700: "#9E5E09",
            800: "#6B4006",
            900: "#382103",
          },
          secondary: {
            DEFAULT: "#F1642F",
            light: "#F9A88A",
            dark: "#C44B1E",
            50: "#FEF2EE",
            100: "#FDE2D9",
            200: "#FBC5B3",
            300: "#F9A88D",
            400: "#F78B67",
            500: "#F1642F",
            600: "#D14A17",
            700: "#9E3811",
            800: "#6B260C",
            900: "#381406",
          },
          accent: {
            DEFAULT: "#09A4E6",
            light: "#7BD2F5",
            dark: "#0680B5",
            50: "#E7F7FD",
            100: "#CFEFFC",
            200: "#9FE0F9",
            300: "#6FD0F6",
            400: "#3FC1F3",
            500: "#09A4E6",
            600: "#0784B8",
            700: "#05638A",
            800: "#04425C",
            900: "#02212E",
          },
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
