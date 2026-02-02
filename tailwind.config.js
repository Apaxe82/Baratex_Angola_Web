import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Verde oficial da Baratex (baseado no branding do Instagram)
        baratexGreen: {
          DEFAULT: '#2D5A27',
          dark: '#1e3d1a',
          light: '#3d7a35',
        },
        baratexGold: '#C5A059', // Cor secundária para selos de garantia
      },
    },
  },
  plugins: [],
};
export default config;
