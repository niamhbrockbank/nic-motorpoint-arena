/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.motorpointarenanottingham.com',
        port: '',
        pathname: '/content/Images/**',
      },
    ],
  }
}
