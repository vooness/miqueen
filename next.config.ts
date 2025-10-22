/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... vaše stávající konfigurace ...
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myshoptet.com',
        port: '',
        pathname: '/usr/shop.miqueen.cz/**',
      },
    ],
  },
}

module.exports = nextConfig