// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reqres.in',
        port: '',
        pathname: '/**', // Allow all paths under reqres.in
      },
    ],
  },
};

module.exports = nextConfig;
