/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "assets.atera.ge", pathname: "/**" },
    ],
  },
};

module.exports = nextConfig;
