const baseUrl = process.env.NEXT_PUBLIC_API_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '8000',
        pathname: '/cardapp/**',
      },
    ],
  },
}

module.exports = nextConfig
