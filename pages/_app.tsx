import { useEffect } from "react";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import * as Fathom from "fathom-client";

import * as gtag from "../lib/gtag";

import AppContextProvider from "@/context/AppContext";

import Layout from "@/components/common/Layout";

import "../styles/globals.css"; // Global style sheet for css

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const siteUrl = process.env.SITE_URL as string;
  const siteTitle = process.env.SITE_TITLE;
  const fathom = process.env.FATHOM_ANALYTICS_ID as string; //fathom analytics id
  const siteUrlhttpsStripped = process.env.SITE_URL?.split("//")[1] as string;

  useEffect(() => {
    // Load fathom analytics
    // Fathom.load(fathom, {
    //   includedDomains: [siteUrlhttpsStripped],
    //   excludedDomains: ["localhost", "*.vercel.app"],
    // });

    // Google Analytics
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };

    // Fathom Analytics
    // const handleRouteChange = () => {
    //   Fathom.trackPageview();
    // };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo
        title={siteTitle}
        description="Studio Notion exists to embed brands into youth music-culture using our decades of experience within the sector"
        canonical={`${siteUrl}${router.asPath === "/" ? "" : router.asPath}`}
        openGraph={{
          type: "website",
          url: `${siteUrl}${router.asPath === "/" ? "" : router.asPath}`,
          site_name: siteTitle,
          title: siteTitle,
          description:
            "Studio Notion exists to embed brands into youth music-culture using our decades of experience within the sector",
          images: [
            {
              url: "/social-share.jpg",
              width: 1200,
              height: 630,
              alt: "social image",
            },
          ],
        }}
        twitter={{
          handle: "@NotionMagazine",
          site: siteUrl,
          cardType: "summary_large_image",
        }}
      />
      <AppContextProvider>
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </AppContextProvider>
    </>
  );
}

export default MyApp;
