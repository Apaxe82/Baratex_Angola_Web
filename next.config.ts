/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desativa o Turbopack temporariamente se o erro persistir, 
  // mas primeiro tente apenas com a correção do CSS acima.
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
