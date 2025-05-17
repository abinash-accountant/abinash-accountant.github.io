/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use static export
  images: { 
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
