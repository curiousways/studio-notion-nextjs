/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  env: {
    SITE_URL: "https://www.studionotion.com",
    SITE_TITLE:
      "Studio Notion - unrivalled access for brands to new music and Generation Z",
    GOOGLE_ANALYTICS_ID: "UA-17566718-10",
  },
};

module.exports = nextConfig;
