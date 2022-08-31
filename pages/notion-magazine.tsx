import { useEffect } from "react";

import type { NextPage } from "next";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/common/Header";
import Slider from "@/components/common/Slider";
import ImageNav from "@/components/common/ImageNav";

import img1 from "../public/assets/images/notion-magazine/01.jpg";
import img2 from "../public/assets/images/notion-magazine/02.jpg";
import img3 from "../public/assets/images/notion-magazine/03.jpg";
import img4 from "../public/assets/images/notion-magazine/04.jpg";
import img5 from "../public/assets/images/notion-magazine/05.jpg";
import img6 from "../public/assets/images/notion-magazine/06.jpg";
import img7 from "../public/assets/images/notion-magazine/07.jpg";
import img8 from "../public/assets/images/notion-magazine/08.jpg";
import img9 from "../public/assets/images/notion-magazine/09.jpg";
import img10 from "../public/assets/images/notion-magazine/10.jpg";

const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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

export default NotionMagazine;
