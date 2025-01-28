/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

module.exports = nextConfig;
