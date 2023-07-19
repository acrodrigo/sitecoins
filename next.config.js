/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, 
  images: {
    domains: ['skycoach.gg'],
  },
  experimental: { esmExternals: true }, /* Para o swiper funcionar */
}

module.exports = nextConfig
