import { useState } from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";

import img1 from "../../public/assets/images/live-events/Bryan-Asya-@b_aseya10-800x1200 (1).png";
import img2 from "../../public/assets/images/live-events/Bryan-Asya-@b_aseya10-800x1200 (2).png";
import img3 from "../../public/assets/images/live-events/Bryan-Asya-@b_aseya10-800x1200.png";
import img4 from "../../public/assets/images/live-events/1.png";
import img5 from "../../public/assets/images/live-events/Astrid S.png";
import img6 from "../../public/assets/images/live-events/Griff.png";
import img7 from "../../public/assets/images/live-events/Santino Le Saint.png";

const Slider = () => {
  const [totalSlides, setTotalSlides] = useState(0);
  const [slide, setSlide] = useState(1);

  return (
    <div className="mt-[90px] px-8 md:px-0 md:ml-[101px]">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerGroup={1}
        rewind={true}
        // autoHeight={true}
        // centeredSlides={true}
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
        <SwiperSlide>
          <Image priority src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority src={img7} />
        </SwiperSlide>
        <div className="mt-8 font-sans-regular flex items-center space-x-8">
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
