import { useEffect } from "react";

import type { NextPage } from "next";
import Image from "next/image";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/common/Header";
import ImageNav from "@/components/common/ImageNav";

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
        <ImageNav />
      </main>
    </>
  );
};

export default CreativeStrategies;
