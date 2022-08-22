import { useEffect } from "react";

import type { NextPage } from "next";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/common/Header";
import Slider from "@/components/common/Slider";
import ImgLink from "@/components/common/ImgLink";

import img1 from "../public/assets/images/home/service_artist_services.jpg";
import img2 from "../public/assets/images/home/service_content_production.jpg";
import img3 from "../public/assets/images/home/service_creative_strategies.jpg";
import img4 from "../public/assets/images/home/service_live_events.jpg";
import img5 from "../public/assets/images/home/service_notion_magazine.jpg";
import img6 from "../public/assets/images/home/service_social_media.jpg";

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
        <Slider />
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
        <div className="mt-10">
          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3">
          <ImgLink 
              image={img1} 
              text="Artist Services"
              link="/artist-services/"              
            />
            <ImgLink 
              image={img2} 
              text="Content Creative & Production"
              link="/content-production/"              

            />
            <ImgLink
              image={img3}
              text="Creative Strategies"
              link="/creative-strategies/"
            />
            <ImgLink
              image={img4}
              text="Live Events" 
              link="/live-events/"               
            />
            <ImgLink
              image={img5}
              text="Notion Magazine"
              link="/notion-magazine/"              
            />
            <ImgLink
              image={img6}
              text="Social Media" 
              link="/social-media/" 
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ArtistServices;
