import { useEffect } from "react";

import type { NextPage } from "next";

import { NextSeo } from "next-seo";

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
  "Joy Crookes x Spotify",
  "Joy Crookes x Spotify",
  "Joy Crookes x Spotify",
  "PizzaExpress ‘Behind The Base’",
  "PizzaExpress Live including JGrrey, Louis III and James Smith",
  "Amazon Music’s +44 Playlist Brand",
  "Amazon Music x Metropolis Studios",
  "Amazon Music x Metropolis Studios",
  "Gucci at Flannels with Knucks & Olivia Dean",
  "Gucci at Flannels with Knucks & Olivia Dean",
  "P&G’s Braun Grooming with Dominic Calvert Lewis",
];

const CreativeStrategies: NextPage = () => {
  const { setPageTheme } = useAppContext();

  useEffect(() => {
    setPageTheme("creative-strategies-bg");
  }, []);

  return (
    <>
      <NextSeo
        title="Studio Notion - Creative Strategies"
        description="Helping brands reach an untapped Generation Z audience is our passion. We know what this demographic wants to see, hear, and do. We’ll work with you to develop bespoke creative strategies that get your brand noticed across social, experiential, and digital media."
        openGraph={{
          description:
            "Helping brands reach an untapped Generation Z audience is our passion. We know what this demographic wants to see, hear, and do. We’ll work with you to develop bespoke creative strategies that get your brand noticed across social, experiential, and digital media.",
        }}
      />
      <div className="container">
        <Header
          title="Creative Strategies"
          summary="Helping brands reach an untapped Generation Z audience is our passion. We know what this demographic wants to see, hear, and do. We’ll work with you to develop bespoke creative strategies that get your brand noticed across social, experiential, and digital media."
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

export default CreativeStrategies;
