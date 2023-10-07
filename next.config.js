/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true
  },
  env: {
    siteTitle: "Chatgenix",
    siteDescription: "WhatsApp Bulk Sender.",
    siteKeywords: "WhatsApp Bulk Sender",
    siteUrl: "https://chatgenix.com",
    siteImagePreviewUrl: "/images/preview.jpeg",
    twitterHandle: "@koksing10"
},
};

module.exports = nextConfig;
