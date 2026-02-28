/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow these dev origins to request Next.js dev assets (dev overlay, HMR, etc.)
  // Add any IPs/hosts you use to preview the site from other devices on your network.
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
  allowedDevOrigins: [
    'http://10.162.8.149',
  ],
}

export default nextConfig
