import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useRouter } from 'next/router';

import { DefaultSeo } from "next-seo";


import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <>
      <Head>
        {/* Insert head code here. Example google fonts */}
      </Head>
      <DefaultSeo
        title="Enter title here"
        description="Enter description here"
        canonical={`${siteUrl}${router.pathname}`}
        openGraph={{
          type: "website",
          url: `${siteUrl}`,
          site_name: "Enter Sitename here",
          title: "Enter title here",
          description: "Enter description here",
          images: [
            {
              url: "Enter social icon path here",
              width: 1200,
              height: 630,
              alt: "True",
            },
          ],
        }}
        twitter={{
          handle: "@twitterhandle",
          site: siteUrl,
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp