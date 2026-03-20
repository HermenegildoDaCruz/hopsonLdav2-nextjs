/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita CSS Modules por padrão — sem configuração extra necessária
  // Permite imagens locais sem domínios externos
  images: {
    unoptimized: false,
  },
};

module.exports = nextConfig;
