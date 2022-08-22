import { useEffect } from "react";

import type { NextPage } from "next";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/common/Header";
import Slider from "@/components/common/Slider";
import ImageNav from "@/components/common/ImageNav";

import img1 from "../public/assets/images/home/service_artist_services.jpg";
import img2 from "../public/assets/images/home/service_content_production.jpg";
import img3 from "../public/assets/images/home/service_creative_strategies.jpg";
import img4 from "../public/assets/images/home/service_live_events.jpg";
import img5 from "../public/assets/images/home/service_notion_magazine.jpg";
import img6 from "../public/assets/images/home/service_social_media.jpg";

const NotionMagazine: NextPage = () => {
  const { setPageTheme } = useAppContext();

  useEffect(() => {
    setPageTheme("notion-magazine-bg");
  }, []);
  return (
    <>
      <div className="container">
        <Header
          title="Notion Magazine"
          summary="Bi-annual magazine NOTION, digital notion.online and social channels can support your campaigns by covering your brands activity or hero’ing product throughout. Notion Magazine communicates directly with Generation Z and can ensure your speaking to your target audience."
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

export default NotionMagazine;
