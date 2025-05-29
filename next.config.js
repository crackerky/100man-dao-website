/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Clean configuration for Netlify deployment
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Remove output standalone for Netlify compatibility
  trailingSlash: false,
  // Optimize for static export when possible
  experimental: {
    // Only include stable experimental features
  }
}

module.exports = nextConfig
