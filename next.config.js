/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    SITE_URL: "https://www.studionotion.com",
    SITE_TITLE:
      "Studio Notion - unrivalled access for brands to new music and Generation Z",
    GOOGLE_ANALYTICS_ID: "UA-17566718-10",
    FATHOM_ANALYTICS_ID: "yourfathomanalyticsid",
  },
};

module.exports = nextConfig;
