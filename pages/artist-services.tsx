import { useEffect } from "react";

import type { NextPage } from "next";

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

const ArtistServices: NextPage = () => {
  const { setPageTheme } = useAppContext();

  useEffect(() => {
    setPageTheme("artist-services-bg");
  }, []);

  return (
    <>
      <div className="container">
        <Header
          title="Artist Services"
          summary="Studio Notion has run events from 200 people to over 3,000 and has a engaged Generation Z attendee database to ensure your party is buzzing. Delivering end-to-end production and management we thrive with live music performances and interactive moments for guests."
        />
      </div>

      <main>
        <Slider slides={slides} />
        <div className="container">
          <div className="max-w-[627px] font-sans-regular text-xl leading-8 space-y-4 mt-7">
            <p>
              We chat to multi-talented creative @josie_ho_chiu about the latest
              step on her trailblazing path from Hong Kong to Hollywood.
            </p>
            <p>
              Read the full feature at Notion.online Photography @martamichalak
              Hair & Makeup @barriegmakeup Styling @hairyspice94 Production
              @studionotion
            </p>
          </div>
        </div>
        {/* Media */}
        <ImageNav />
      </main>
    </>
  );
};

export default ArtistServices;
