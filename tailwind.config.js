/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        baratexGreen: {
          DEFAULT: '#2D5A27',
          dark: '#1e3d1a',   // Para hover em botões
          light: '#3d7a35',  // Para destaques suaves
        },
        baratexWhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
};

