/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use static export
  images: { 
    unoptimized: true,
  },  
  eslint: {
    ignoreDuringBuilds: true,
  },
  // GitHub Pages organization sites serve from root, not a subfolder
  trailingSlash: true, // Add trailing slashes to help with static exports
};

module.exports = nextConfig;
