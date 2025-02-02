/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export", // Enables static export
    images: {
      unoptimized: true, // Disables image optimization for static export
    },
    trailingSlash: true, // Adds trailing slash for compatibility
    assetPrefix: "",
  };

  export default nextConfig;
