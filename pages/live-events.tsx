import { useEffect } from "react";

import type { NextPage } from "next";
import Image from "next/image";

import { useAppContext } from "@/context/AppContext";

import Header from "@/components/common/Header";
import Slider from "@/components/common/Slider";

const LiveEvents: NextPage = () => {
  const { setFooterTheme } = useAppContext();

  useEffect(() => {
    setFooterTheme("live-events-bg");
  }, []);

  return (
    <>
      <div className="container">
        <Header
          title="Live Events"
          summary="Studio Notion has run events from 200 people to over 3,000 and has a engaged Generation Z attendee database to ensure your party is buzzing. Delivering end-to-end production and management we thrive with live music performances and interactive moments for guests."
        />
      </div>

      <main>
        <Slider />
      </main>
    </>
  );
};

export default LiveEvents;
