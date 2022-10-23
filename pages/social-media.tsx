import { useEffect } from "react";

import type { NextPage } from "next";

import { NextSeo } from "next-seo";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/common/Header";
import Slider from "@/components/common/Slider";
import ImageNav from "@/components/common/ImageNav";

import img1 from "../public/assets/images/social-media/01.jpg";
import img2 from "../public/assets/images/social-media/02.jpg";
import img3 from "../public/assets/images/social-media/03.jpg";
import img4 from "../public/assets/images/social-media/04.jpg";
import img5 from "../public/assets/images/social-media/05.jpg";
import img6 from "../public/assets/images/social-media/06.jpg";
import img7 from "../public/assets/images/social-media/07.jpg";
import img8 from "../public/assets/images/social-media/08.jpg";
import img9 from "../public/assets/images/social-media/09.jpg";
import img10 from "../public/assets/images/social-media/10.jpg";
import img11 from "../public/assets/images/social-media/11.jpg";

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
  "BULLDOG Gin x Charlotte De Carle",
  "",
  "BULLDOG Gin x Tia Kofi",
  "",
  "",
  "",
  "",
  "Estrella Galicia x Joey London",
  "",
  "Estrella Galicia x Lily Mercer",
  "",
];

const SocialMedia: NextPage = () => {
  const { setPageTheme } = useAppContext();

  useEffect(() => {
    setPageTheme("live-events-bg");
  }, []);

  return (
    <>
      <NextSeo
        title="Studio Notion - Social Media"
        description="Studio Notion can deliver social channel strategies & influencer engagement to live on brand-owned platforms which will engage, excite, and drive action from Generation Z."
        openGraph={{
          description: "Studio Notion can deliver social channel strategies & influencer engagement to live on brand-owned platforms which will engage, excite, and drive action from Generation Z.",
        }}
      />
      <div className="container">
        <Header
          title="Social Media"
          summary="Studio Notion can deliver social channel strategies & influencer engagement to live on brand-owned platforms which will engage, excite, and drive action from Generation Z."
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

export default SocialMedia;
