/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  // Remove the custom webpack configuration to disable it
  webpack(config) {
    return config; // Return the default config without modifications
  },
}

module.exports = nextConfig;
