import { useState } from "react";

import Image from "next/image";
import type { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";

type Props = {
  slides: StaticImageData[];
};

const Slider = ({ slides }: Props) => {
  const [totalSlides, setTotalSlides] = useState(0);
  const [slide, setSlide] = useState(1);

  return (
    <div className="mt-[90px] w-5/6 mx-auto md:mx-0 md:ml-auto md:w-11/12 3xl:max-w-[1471px] 3xl:mx-auto">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={8}
        slidesPerGroup={1}
        rewind={true}
        // autoHeight={true}
        // centeredSlides={true}
        centerInsufficientSlides
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        onSwiper={(swiper) => {
          setTotalSlides(swiper.slides.length);
        }}
        onSlideChange={(swiper) => {
          setSlide(swiper.activeIndex + 1);
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Image priority src={slide} />
          </SwiperSlide>
        ))}

        <div className="mt-4 font-sans-regular flex items-center space-x-8">
          <span className="swiper-button-prev text-[40px] leading-8 cursor-pointer">
            ←
          </span>
          <span className="text-xl leading-6">
            {slide}/{totalSlides}
          </span>
          <span className="swiper-button-next text-[40px] leading-8 cursor-pointer">
            →
          </span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
