import { useEffect } from "react";

import type { NextPage } from "next";

import { NextSeo } from "next-seo";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/common/Header";
import Slider from "@/components/common/Slider";
import ImageNav from "@/components/common/ImageNav";

import img1 from "../public/assets/images/live-events/01.jpg";
import img2 from "../public/assets/images/live-events/02.jpg";
import img3 from "../public/assets/images/live-events/03.jpg";
import img4 from "../public/assets/images/live-events/04.jpg";
import img5 from "../public/assets/images/live-events/05.jpg";
import img6 from "../public/assets/images/live-events/06.jpg";
import img7 from "../public/assets/images/live-events/07.jpg";
import img8 from "../public/assets/images/live-events/08.jpg";
import img9 from "../public/assets/images/live-events/09.jpg";
import img10 from "../public/assets/images/live-events/10.jpg";
import img11 from "../public/assets/images/live-events/11.jpg";

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
  "Dr Martens Boot Room, Camden",
  "",
  "Swatch, Shoreditch",
  "Virgin Money, The O2 Arena",
  "Dr Martens Boot Room, Camden",
  "PizzaExpress Live, Dean Street",
  "PizzaExpress Live, Dean Street",
  "K-Swiss, King’s Cross",
  "Amazon Music, Metropolis Studios",
  "PizzaExpress Live, Dean Street",
  "Virgin Money, Kensington",
];

const LiveEvents: NextPage = () => {
  const { setPageTheme } = useAppContext();

  useEffect(() => {
    setPageTheme("live-events-bg");
  }, []);

  return (
    <>
      <NextSeo
        title="Studio Notion - Live Events"
        description="Studio Notion has run events from 200 people to over 3,000 and has an engaged Generation Z attendee database to ensure your party is buzzing. Delivering end-to-end production and management we thrive with live music performances and interactive moments for guests."
        openGraph={{
          description: "Studio Notion has run events from 200 people to over 3,000 and has an engaged Generation Z attendee database to ensure your party is buzzing. Delivering end-to-end production and management we thrive with live music performances and interactive moments for guests.",
        }}
      />
      <div className="container">
        <Header
          title="Live Events"
          summary="Studio Notion has run events from 200 people to over 3,000 and has an engaged Generation Z attendee database to ensure your party is buzzing. Delivering end-to-end production and management we thrive with live music performances and interactive moments for guests."
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

export default LiveEvents;
