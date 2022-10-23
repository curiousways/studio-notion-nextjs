import { useEffect } from "react";

import type { NextPage } from "next";
import Image from "next/image";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/home/Header";
import ImageNav from "@/components/common/ImageNav";

import { logos } from "@/data/home";

const Home: NextPage = () => {
  const { setPageTheme } = useAppContext();

  useEffect(() => {
    setPageTheme("home-bg");
  }, []);

  return (
    <>
      <Header />

      <main>
        <div className="container pt-32 pb-16">
          <h2 className="uppercase">
            Studio Notion offers unrivalled access for brands to new music and
            generation Z.
          </h2>
        </div>

        {/* Capabilities */}
        <div id="capabilities" className="space-y-2 pt-20">
          <h3 className="text-2xl uppercase mb-6">Capabilities</h3>
          <ImageNav />
        </div>

        {/* Partners */}
        <div
          id="partners"
          className="container py-20 xl:pt-[104px] xl:pb-[151px] space-y-10 xl:space-y-[75px]"
        >
          <h3 className="uppercase">Some of our partners</h3>
          <div className="grid gap-y-10 md:gap-y-20 md:gap-x-32 md:grid-cols-2 xl:grid-cols-3 max-w-[1271px] mx-auto text-center">
            {logos.map(({ src, alt, text }) => (
              <div key={alt} className="text-center mx-auto space-y-4">
                <div className="w-[240px] h-[110px] relative mx-auto">
                  <Image src={src} alt={alt} layout="fill" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unrivalled */}
        <div id="unrivalled" className="bg-faded">
          <div className="container py-20 xl:pt-[106px] space-y-[54px]">
            <h3 className="uppercase">Why are we unrivalled?</h3>
            <div className="text-center max-w-[860px] mx-auto space-y-8">
              <p>Studio Notion knows music inside out.</p>
              <p>
                Our editorial platform, Notion, was created 18 years ago to
                showcase the best new music from both emerging and established
                talent. Today on its 91st issue, reaching over 1 million monthly
                readers, it is a globally recognised entertainment print
                magazine, digital platform and community.
              </p>
              <p>
                Studio Notion exists to embed brands into youth music-culture
                using our decades of experience within the sector.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
