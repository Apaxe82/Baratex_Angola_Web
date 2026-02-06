/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  // Garante que o Tailwind verifica todos os ficheiros onde usa classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Caso decida usar pasta src no futuro
  ],
  theme: {
    extend: {
      colors: {
        // Definição exata da identidade visual da Baratex
        baratexGreen: {
          DEFAULT: '#2D5A27',
          dark: '#1e3d1a',
          light: '#eaf2e9',
        },
        baratexRed: '#D32F2F',
        baratexGray: '#F4F7F4',
      },
      // Configuração de containers para garantir que o site não "estique" demasiado em ecrãs grandes
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        'button-pulse': 'pulseCustom 2s infinite',
      },
      keyframes: {
        pulseCustom: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        }
      },
    },
  },
  // Plugins que ajudam na tipografia e em aspetos visuais
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
