/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ PŘIDÁNO - vypne Image Optimization
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
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
  },

  // Performance optimizations
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,

  // Headers pro caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;