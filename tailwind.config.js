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
        // Verde principal da marca
        baratexGreen: {
          DEFAULT: '#2D5A27',
          dark: '#1e3d1a',
          light: '#eaf2e9', // Útil para fundos de secções
        },
        // Vermelho para alertas/emergências (ex: botões de perigo ou ratos)
        baratexRed: '#D32F2F',
        // Cinza suave para backgrounds e textos secundários
        baratexGray: '#F4F7F4',
      },
      // Configuração para o container ficar sempre centrado por padrão
      container: {
        center: true,
        padding: '1.5rem',
      },
      // Animação para o botão de WhatsApp que criamos antes
      keyframes: {
        pulseCustom: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        }
      },
      animation: {
        'button-pulse': 'pulseCustom 2s infinite',
      }
    },
  },
  plugins: [],
};
