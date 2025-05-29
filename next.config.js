/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Optimize build performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable experimental features if needed
  experimental: {
    optimizeCss: true,
  }
}

module.exports = nextConfig
