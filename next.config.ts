import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ============================================
  // IMAGE OPTIMIZATION - KRITICKÉ PRO MOBIL
  // ============================================
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myshoptet.com',
        port: '',
        pathname: '/usr/shop.miqueen.cz/**',
      },
      {
        protocol: 'https',
        hostname: 'shop.miqueen.cz',
        port: '',
        pathname: '/user/documents/upload/**',
      },
    ],
    // Moderní formáty pro lepší kompresi
    formats: ['image/avif', 'image/webp'],
    
    // Responsive breakpoints optimalizované pro mobil
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Dlouhá cache pro obrázky
    minimumCacheTTL: 31536000, // 1 rok
    
    // Optimalizace kvality
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ============================================
  // COMPILER OPTIMIZATIONS
  // ============================================
  compiler: {
    // Odstraň console.log v produkci
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    
    // React strict mode optimalizace
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // ============================================
  // EXPERIMENTAL FEATURES
  // ============================================
  experimental: {
    // Optimalizuj CSS
    optimizeCss: true,
    
    // Lepší scroll restoration
    scrollRestoration: true,
    
    // Optimalizuj package imports
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-slider',
    ],
  },

  // ============================================
  // WEBPACK OPTIMIZATIONS
  // ============================================
  webpack: (config, { dev, isServer }) => {
    // Production optimalizace
    if (!dev && !isServer) {
      // Better code splitting
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // Framework chunk (React, Next.js)
            framework: {
              test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
              name: 'framework',
              priority: 40,
              enforce: true,
            },
            // Vendor chunk (ostatní node_modules)
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              priority: 30,
              reuseExistingChunk: true,
            },
            // Commons chunk (shared code)
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
            },
            // Styles chunk
            styles: {
              name: 'styles',
              test: /\.(css|scss)$/,
              chunks: 'all',
              enforce: true,
              priority: 10,
            },
          },
        },
      };

      // Minimize
      if (config.optimization) {
        config.optimization.minimize = true;
      }
    }

    return config;
  },

  // ============================================
  // HEADERS - CACHING & PERFORMANCE
  // ============================================
  async headers() {
    return [
      // Static assets - 1 rok cache
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Next.js static files - 1 rok cache
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Fonts - 1 rok cache
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // HTML pages - kratší cache s revalidací
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
          // Performance headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // ============================================
  // COMPRESSION
  // ============================================
  compress: true, // Gzip compression

  // ============================================
  // REACT OPTIMIZATIONS
  // ============================================
  reactStrictMode: true,
  
  // Vypni X-Powered-By header
  poweredByHeader: false,

  // ============================================
  // SWCMINIFY - RYCHLEJŠÍ MINIFIKACE
  // ============================================
  swcMinify: true,

  // ============================================
  // MODULARIZE IMPORTS
  // ============================================
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
};

export default nextConfig;