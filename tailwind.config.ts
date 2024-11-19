import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-blue": 'linear-gradient(89deg, rgba(246, 246, 246, 0.10) -23.92%, rgba(255, 255, 255, 0.20) 98.88%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
