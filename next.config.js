/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    SITE_URL: "site url",
    SITE_TITLE:
      "Studio Notion - unrivalled access for brands to new music and Generation Z",
    GOOGLE_ANALYTICS_ID: "yourgaid",
    FATHOM_ANALYTICS_ID: "yourfathomanalyticsid",
  },
};

module.exports = nextConfig;
