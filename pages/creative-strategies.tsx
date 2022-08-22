import { useEffect } from "react";

import type { NextPage } from "next";
import Image from "next/image";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/common/Header";
import ImgLink from "@/components/common/ImgLink";

import img1 from "../public/assets/images/home/service_artist_services.jpg";
import img2 from "../public/assets/images/home/service_content_production.jpg";
import img3 from "../public/assets/images/home/service_creative_strategies.jpg";
import img4 from "../public/assets/images/home/service_live_events.jpg";
import img5 from "../public/assets/images/home/service_notion_magazine.jpg";
import img6 from "../public/assets/images/home/service_social_media.jpg";

import spotify from "../public/assets/images/home/logo_nb_2.png";
import bulldog from "../public/assets/images/home/logo_nb_2.png";
import flannels from "../public/assets/images/home/logo_nb_2.png";

const CreativeStrategies: NextPage = () => {
  const { setPageTheme } = useAppContext();

  useEffect(() => {
    setPageTheme("creative-strategies-bg");
  }, []);

  return (
    <>
      <div className="container">
        <Header
          title="Creative Strategies"
          summary="Helping brands reach an untapped Generation Z audience is our passion. We know what this demographic wants to see, hear and do. We’ll work with you to develop bespoke creative strategies that get your brand noticed across social, experiential and digital media."
        />
      </div>

      <main>
        <div className="container">
          {/* Logos */}
          <div className="grid gap-y-10 md:gap-y-10 md:gap-x-32 md:grid-cols-2 lg:grid-cols-3 max-w-[1271px] mx-auto text-center mt-10 mb-20">
            <div className="text-center">
              <div className="w-[240px] h-[110px] relative mx-auto">
                <Image src={spotify} alt="spotify" layout="fill" />
              </div>
            </div>
            <div className="text-center">
              <div className="w-[240px] h-[110px] relative mx-auto">
                <Image src={flannels} alt="flannels" layout="fill" />
              </div>
            </div>
            <div className="text-center">
              <div className="w-[240px] h-[110px] relative mx-auto">
                <Image src={bulldog} alt="bulldog" layout="fill" />
              </div>
            </div>
          </div>
        </div>
        {/* Media */}
        <div>
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

export default CreativeStrategies;
