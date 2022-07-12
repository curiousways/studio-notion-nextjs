import { useEffect } from "react";

import type { NextPage } from "next";
import Image from "next/image";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/home/Header";

import img1 from "../public/assets/images/home/img-1.jpg";
import img2 from "../public/assets/images/home/img-2.jpg";
import img3 from "../public/assets/images/home/img-3.jpg";
import img4 from "../public/assets/images/home/img-4.jpg";
import img5 from "../public/assets/images/home/img-5.jpg";
import img6 from "../public/assets/images/home/img-6.jpg";

import { logos } from "@/data/home";

import spotify from "../public/assets/images/home/spotify.svg";
import adidas from "../public/assets/images/home/adidas.svg";
import bulldog from "../public/assets/images/home/bulldog.svg";
import flannels from "../public/assets/images/home/flannels.svg";
import amazonFashion from "../public/assets/images/home/amazon-fashion.svg";
import amazonMusic from "../public/assets/images/home/amazon-music.svg";
import jager from "../public/assets/images/home/jager.svg";
import money from "../public/assets/images/home/money.svg";
import drMartens from "../public/assets/images/home/dr-martens.svg";

const Home: NextPage = () => {
  const { setFooterTheme } = useAppContext();

  useEffect(() => {
    setFooterTheme("home-bg");
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
            <div className="relative">
              <Image src={img1} layout="responsive" alt="Social Media" />
              <div className="absolute bottom-0 left-0 h-[200px] w-full text-white bg-dark-overlay flex justify-center items-center">
                <p className="text-[25px] leading-[27.5px] font-druk text-center px-6">
                  Social Media
                </p>
              </div>
            </div>
            <div className="relative">
              <Image src={img2} layout="responsive" alt="Live Events" />
              <div className="absolute bottom-0 left-0 h-[200px] w-full text-white bg-dark-overlay flex justify-center items-center">
                <p className="text-[25px] leading-[27.5px] font-druk text-center px-6 max-w-[429px]">
                  Live Events
                </p>
              </div>
            </div>
            <div className="relative">
              <Image src={img3} layout="responsive" alt="Notion Magazine" />
              <div className="absolute bottom-0 left-0 h-[200px] w-full text-white bg-dark-overlay flex justify-center items-center">
                <p className="text-[25px] leading-[27.5px] font-druk text-center px-6 max-w-[429px]">
                  Notion Magazine
                </p>
              </div>
            </div>
            <div className="relative">
              <Image src={img4} layout="responsive" alt="Creative Strategies" />
              <div className="absolute bottom-0 left-0 h-[200px] w-full text-white bg-dark-overlay flex justify-center items-center">
                <p className="text-[25px] leading-[27.5px] font-druk text-center px-6 max-w-[429px]">
                  Creative Strategies
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={img5}
                layout="responsive"
                alt="Content Creative & Production"
              />
              <div className="absolute bottom-0 left-0 h-[200px] w-full text-white bg-dark-overlay flex justify-center items-center">
                <p className="text-[25px] leading-[27.5px] font-druk text-center px-6 max-w-[429px]">
                  Content Creative & Production
                </p>
              </div>
            </div>
            <div className="relative">
              <Image src={img6} layout="responsive" alt="Artist Services" />
              <div className="absolute bottom-0 left-0 h-[200px] w-full text-white bg-dark-overlay flex justify-center items-center">
                <p className="text-[25px] leading-[27.5px] font-druk text-center px-6 max-w-[429px]">
                  Artist Services
                </p>
              </div>
            </div>
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
