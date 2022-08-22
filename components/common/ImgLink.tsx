import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { classNames } from "@/utils/index";

type Props = {
  image: StaticImageData;
  text: string;
  link: string;
};

const ImgLink = ({ image, text, link }: Props) => {
  const router = useRouter();

  return (
    <Link href={link} passHref>
      <a
        className={classNames(
          "relative group cursor-pointer hover:bg-overlay-70 transition-all duration-300",
          router.asPath === link ? "bg-overlay-70" : ""
        )}
      >
        <Image
          src={image}
          layout="responsive"
          sizes="50vw"
          alt={text}
          className={classNames(
            "group-hover:grayscale",
            router.asPath === link ? "grayscale" : ""
          )}
        />
        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] text-white bg-dark-overlay flex justify-center items-end pb-9">
          <p
            className={classNames(
              "uppercase text-[25px] leading-[27.5px] font-druk text-center px-6 group-hover:opacity-70 transition-opacity duration-300",
              router.asPath === link ? "opacity-70" : ""
            )}
          >
            {text}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ImgLink;
