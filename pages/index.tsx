import { useEffect } from "react";

import type { NextPage } from "next";
import Image from "next/image";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/home/Header";
import ImgLink from "@/components/common/ImgLink";

import img1 from "../public/assets/images/home/img-1.jpg";
import img2 from "../public/assets/images/home/img-2.jpg";
import img3 from "../public/assets/images/home/img-3.jpg";
import img4 from "../public/assets/images/home/img-4.jpg";
import img5 from "../public/assets/images/home/img-5.jpg";
import img6 from "../public/assets/images/home/img-6.jpg";

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
        <div className="container py-20 xl:py-[102px]">
          <h2>
            Studio Notion offers unrivalled access for brands to new music and
            generation Z.
          </h2>
        </div>

        {/* Media */}
        <div className="space-y-2">
          <h3>Capabilities</h3>
          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3">
            <ImgLink image={img1} text="Social Media" link="/" />
            <ImgLink image={img2} text="Live Events" link="/live-events" />
            <ImgLink
              image={img3}
              text="Notion Magazine"
              link="/notion-magazine"
            />
            <ImgLink
              image={img4}
              text="Creative Strategies"
              link="/creative-strategies"
            />
            <ImgLink
              image={img5}
              text="Content Creative & Production"
              link="/"
            />
            <ImgLink
              image={img6}
              text="Artist Services"
              link="/artist-services"
            />
          </div>
        </div>

        {/* Works */}
        <div className="container py-20 xl:pt-[104px] xl:pb-[151px] space-y-10 xl:space-y-[75px]">
          <h3>OUR WORK</h3>
          <div className="grid gap-y-10 md:gap-y-20 md:gap-x-32 md:grid-cols-2 xl:grid-cols-3 max-w-[1271px] mx-auto text-center">
            {logos.map(({ src, alt, text }) => (
              <div key={alt} className="text-center mx-auto space-y-4">
                <div className="w-[240px] h-[110px] relative mx-auto">
                  <Image src={src} alt={alt} layout="fill" />
                </div>
                <p className="max-w-[410px]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/*  */}
        <div className="container py-20 xl:pt-[106px] space-y-[54px]">
          <h3>Why are we unrivalled?</h3>
          <div className="text-center max-w-[860px] mx-auto space-y-4">
            <p>Studio Notion knows music inside out.</p>
            <p>
              Our editorial platform, Notion, was created 18 years ago to
              showcase the best new music from both emerging and established
              talent. Today on its 91st issue, reaching over 1 million monthly
              readers, it is a globally recognised entertainment print magazine,
              digital platform and community.
            </p>
            <p>
              Studio Notion exists to embed brands into youth music-culture
              using our decades of experience within the sector.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
