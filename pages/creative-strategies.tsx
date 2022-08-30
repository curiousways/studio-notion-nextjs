import { useEffect } from "react";

import type { NextPage } from "next";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/common/Header";
import Slider from "@/components/common/Slider";
import ImageNav from "@/components/common/ImageNav";

import img1 from "../public/assets/images/creative-strategies/01.jpg";
import img2 from "../public/assets/images/creative-strategies/02.jpg";
import img3 from "../public/assets/images/creative-strategies/03.jpg";
import img4 from "../public/assets/images/creative-strategies/04.jpg";
import img5 from "../public/assets/images/creative-strategies/05.jpg";
import img6 from "../public/assets/images/creative-strategies/06.jpg";
import img7 from "../public/assets/images/creative-strategies/07.jpg";
import img8 from "../public/assets/images/creative-strategies/08.jpg";
import img9 from "../public/assets/images/creative-strategies/09.jpg";
import img10 from "../public/assets/images/creative-strategies/10.jpg";
import img11 from "../public/assets/images/creative-strategies/11.jpg";

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
        <ImageNav />
      </main>
    </>
  );
};

export default CreativeStrategies;
