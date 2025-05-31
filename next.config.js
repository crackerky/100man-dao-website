/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Optimize build performance
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    optimizeCss: false, // Disable to prevent critters dependency issues
  },
  // Headers configuration to handle CSP for Framer Motion
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'development' 
              ? "script-src 'self' 'unsafe-eval' 'unsafe-inline'; object-src 'none';"
              : "script-src 'self' 'unsafe-inline'; object-src 'none';"
          },
        ],
      },
    ]
  },
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Optimize for production builds
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    // Reduce bundle size
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\\\/]node_modules[\\\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          framerMotion: {
            test: /[\\\\/]node_modules[\\\\/]framer-motion[\\\\/]/,
            name: 'framer-motion',
            chunks: 'all',
          },
        },
      },
    }
    
    return config
  },
  // Build performance
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
}

module.exports = nextConfig
