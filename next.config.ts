/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- 1. OBRÁZKY ---
  images: {
    // ✅ PŘEPNUTO NA TRUE: Vypne Vercel Image Optimization (vyřeší limit)
    // Obrázky se budou načítat v původní velikosti ze zdroje
    unoptimized: true, 
    
    // Tyto hodnoty se při unoptimized: true ignorují, ale necháváme je pro případný upgrade
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    
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
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // --- 2. KOMPILÁTOR ---
  compiler: {
    // Odstraní console.log v produkci (zrychlí běh skriptů na slabších telefonech)
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'],
    } : false,
  },

  // --- 3. HLAVNÍ OPTIMALIZACE ---
  compress: true,       // Gzip/Brotli komprese
  reactStrictMode: true,
  poweredByHeader: false, // Bezpečnost + ušetří pár bajtů
  // swcMinify: true,   <-- ODSTRANĚNO (v nových verzích Next.js je to default a způsobovalo chybu)

  // --- 4. EXPERIMENTÁLNÍ FUNKCE ---
  experimental: {
    // Optimalizuje načítání CSS
    optimizeCss: true, 
    // Zlepšuje výkon scrollu
    scrollRestoration: true,
  },

  // --- 5. CACHING HEADERS ---
  // Toto je nyní KLÍČOVÉ, když nefunguje optimalizace obrázků.
  // Nutíme prohlížeč, aby si obrázky uložil na rok a nestahoval je znovu.
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)',
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