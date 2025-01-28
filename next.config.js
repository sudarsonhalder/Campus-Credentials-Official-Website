/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
  trailingSlash: true, // Adds trailing slash to all paths
  assetPrefix: './', // Ensures assets load correctly in static exports
};

module.exports = nextConfig;
