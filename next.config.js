/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "shikimori.one",
          }
        ]
      }
}

module.exports = nextConfig
