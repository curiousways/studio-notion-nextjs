import { useEffect } from "react";

import type { NextPage } from "next";

import { NextSeo } from "next-seo";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/common/Header";
import Slider from "@/components/common/Slider";
import ImageNav from "@/components/common/ImageNav";

import img1 from "../public/assets/images/content-production/01.jpg";
import img2 from "../public/assets/images/content-production/02.jpg";
import img3 from "../public/assets/images/content-production/03.jpg";
import img4 from "../public/assets/images/content-production/04.jpg";
import img5 from "../public/assets/images/content-production/05.jpg";
import img6 from "../public/assets/images/content-production/06.jpg";
import img7 from "../public/assets/images/content-production/07.jpg";
import img8 from "../public/assets/images/content-production/08.jpg";
import img9 from "../public/assets/images/content-production/09.jpg";
import img10 from "../public/assets/images/content-production/10.jpg";
import img11 from "../public/assets/images/content-production/11.jpg";

const slides = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

const text = [
  "Creative & Content Production for Nike Air Max 270 React",
  "Content Production for The North Face",
  "Creative & Content Production for Beats By Dre",
  "Creative & Content Production for Defected Records",
  "Content Production for BULLDOG Gin & Field Day",
  "Creative & Content Production for FS Magazine",
  "Creative & Content Production for K-Swis",
  "Content Production for Adidas",
  "Creative & Content Production for Nike Air Max 270 React",
  "Creative & Content Production for New Balance",
  "Content Production for Virgin Money",
];

const ContentProduction: NextPage = () => {
  const { setPageTheme } = useAppContext();

  useEffect(() => {
    setPageTheme("live-events-bg");
  }, []);

  return (
    <>
      <NextSeo
        title="Studio Notion - Content Creative &amp; Production"
        description="Our category leading content team can ideate and produce any digital content you need. From campaign images and video to metaverse products and talent-led shoots. We also have an in-house studio to capture trendsetting content."
        openGraph={{
          description: "Our category leading content team can ideate and produce any digital content you need. From campaign images and video to metaverse products and talent-led shoots. We also have an in-house studio to capture trendsetting content.",
        }}
      />
      <div className="container">
        <Header
          title="Content Creative &amp; Production"
          summary="Our category leading content team can ideate and produce any digital content you need. From campaign images and video to metaverse products and talent-led shoots. We also have an in-house studio to capture trendsetting content."
        />
      </div>

      <main>
        <Slider slides={slides} textSlides={text} />

        {/* Media */}
        <ImageNav />
      </main>
    </>
  );
};

export default ContentProduction;
