import { useEffect } from "react";

import type { NextPage } from "next";

import { NextSeo } from "next-seo";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/common/Header";
import Slider from "@/components/common/Slider";
import ImageNav from "@/components/common/ImageNav";

import img1 from "../public/assets/images/artist-services/01.jpg";
import img2 from "../public/assets/images/artist-services/02.jpg";
import img3 from "../public/assets/images/artist-services/03.jpg";
import img4 from "../public/assets/images/artist-services/04.jpg";
import img5 from "../public/assets/images/artist-services/05.jpg";
import img6 from "../public/assets/images/artist-services/06.jpg";
import img7 from "../public/assets/images/artist-services/07.jpg";
import img8 from "../public/assets/images/artist-services/08.jpg";
import img9 from "../public/assets/images/artist-services/09.jpg";
import img10 from "../public/assets/images/artist-services/10.jpg";

const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
// const text = [
//   "Read the full feature at Notion.online Photography @martamichalak Hair & Makeup @barriegmakeup Styling @hairyspice94 Production @studionotion",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero nesciunt maiores ratione voluptatum recusandae consequuntur ea ipsa reiciendis ad.",
//   "We chat to multi-talented creative @josie_ho_chiu about the latest step on her trailblazing path from Hong Kong to Hollywood.",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero nesciunt maiores ratione voluptatum recusandae consequuntur ea ipsa reiciendis ad.",
//   "We chat to multi-talented creative @josie_ho_chiu about the latest step on her trailblazing path from Hong Kong to Hollywood.",
//   "Read the full feature at Notion.online Photography @martamichalak Hair & Makeup @barriegmakeup Styling @hairyspice94 Production @studionotion",
//   "We chat to multi-talented creative @josie_ho_chiu about the latest step on her trailblazing path from Hong Kong to Hollywood.",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero nesciunt maiores ratione voluptatum recusandae consequuntur ea ipsa reiciendis ad.",
//   "consectetur adipisicing elit. Sit vero nesciunt maiores ratione voluptatum recusandae consequuntur ea ipsa reiciendis ad.",
//   "Read the full feature at Notion.online Photography @martamichalak Hair & Makeup @barriegmakeup Styling @hairyspice94 Production @studionotion",
// ];

const ArtistServices: NextPage = () => {
  const { setPageTheme } = useAppContext();

  useEffect(() => {
    setPageTheme("artist-services-bg");
  }, []);

  return (
    <>
      <NextSeo
        title="Studio Notion - Artist Services"
        description="Whether it is press shots, creative consultancy, merch design or NFTs, we’re here to ensure independent artists are elevated across all aspects of their career and output. We deliver end-to-end management of artist assets, creative & products.."
        openGraph={{
          description: "Whether it is press shots, creative consultancy, merch design or NFTs, we’re here to ensure independent artists are elevated across all aspects of their career and output. We deliver end-to-end management of artist assets, creative & products.",
        }}
      />
      <div className="container">
        <Header
          title="Artist Services"
          summary="Whether it is press shots, creative consultancy, merch design or NFTs, we’re here to ensure independent artists are elevated across all aspects of their career and output. We deliver end-to-end management of artist assets, creative & products."
        />
      </div>

      <main>
        <Slider slides={slides} />
        {/* Media */}
        <ImageNav />
      </main>
    </>
  );
};

export default ArtistServices;
