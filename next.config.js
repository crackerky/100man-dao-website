/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Clean build configuration for production deployment
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Remove experimental features that cause dependency issues
  experimental: {},
  // Ensure output is standalone for better deployment compatibility
  output: 'standalone',
}

module.exports = nextConfig
