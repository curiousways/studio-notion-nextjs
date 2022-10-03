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
  "Read the full feature at Notion.online Photography @martamichalak Hair & Makeup @barriegmakeup Styling @hairyspice94 Production @studionotion",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero nesciunt maiores ratione voluptatum recusandae consequuntur ea ipsa reiciendis ad.",
  "We chat to multi-talented creative @josie_ho_chiu about the latest step on her trailblazing path from Hong Kong to Hollywood.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero nesciunt maiores ratione voluptatum recusandae consequuntur ea ipsa reiciendis ad.",
  "We chat to multi-talented creative @josie_ho_chiu about the latest step on her trailblazing path from Hong Kong to Hollywood.",
  "Read the full feature at Notion.online Photography @martamichalak Hair & Makeup @barriegmakeup Styling @hairyspice94 Production @studionotion",
  "We chat to multi-talented creative @josie_ho_chiu about the latest step on her trailblazing path from Hong Kong to Hollywood.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero nesciunt maiores ratione voluptatum recusandae consequuntur ea ipsa reiciendis ad.",
  "consectetur adipisicing elit. Sit vero nesciunt maiores ratione voluptatum recusandae consequuntur ea ipsa reiciendis ad.",
  "Read the full feature at Notion.online Photography @martamichalak Hair & Makeup @barriegmakeup Styling @hairyspice94 Production @studionotion",
  "We chat to multi-talented creative @josie_ho_chiu about the latest step on her trailblazing path from Hong Kong to Hollywood.",
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
        description=""
        openGraph={{
          description: "",
        }}
      />
      <div className="container">
        <Header
          title="Content Creative &amp; Production"
          summary="Studio Notion has run events from 200 people to over 3,000 and has a engaged Generation Z attendee database to ensure your party is buzzing. Delivering end-to-end production and management we thrive with live music performances and interactive moments for guests."
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
