/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use static export
  basePath: '/abinash-accountant.github.io',         // <-- important for GitHub Pages
  assetPrefix: '/abinash-accountant.github.io/',    
  images: { 
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
