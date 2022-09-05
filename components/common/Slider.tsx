import { useState, useEffect, useCallback } from "react";

import Image from "next/image";
import type { StaticImageData } from "next/image";

import useEmblaCarousel from "embla-carousel-react";

type Props = {
  slides: StaticImageData[];
  textSlides?: string[];
};

const Slider = ({ slides, textSlides }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    breakpoints: {
      "(max-width: 1279px)": { dragFree: true },
    },
  });

  const [slide, setSlide] = useState(1);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setSlide(emblaApi?.selectedScrollSnap() + 1));

    return () => {
      emblaApi.off("select", () =>
        setSlide(emblaApi?.selectedScrollSnap() + 1)
      );
    };
  }, [emblaApi]);

  return (
    <>
      <div className="mt-[90px] w-5/6 mx-auto md:mx-0 md:ml-auto md:w-11/12 3xl:max-w-[1471px] 3xl:mx-auto">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, i) => (
              <div className="embla__slide pl-4 xl:pl-6" key={i}>
                <Image
                  priority
                  src={slide}
                  height={500}
                  width={slide.width / 2}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 font-sans-regular flex items-center space-x-8">
          <span
            className="text-[40px] leading-8 cursor-pointer"
            onClick={scrollPrev}
          >
            ←
          </span>
          <span className="text-xl leading-6">
            {slide}/{emblaApi?.slideNodes().length}
          </span>
          <span
            className="text-[40px] leading-8 cursor-pointer"
            onClick={scrollNext}
          >
            →
          </span>
        </div>
      </div>

      {textSlides && (
        <div className="container">
          <div className="max-w-[627px] font-sans-regular text-xl leading-8 space-y-4 mt-7">
            <p>{textSlides[slide - 1]}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
