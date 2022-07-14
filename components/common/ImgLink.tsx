import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  text: string;
  link: string;
};

const ImgLink = ({ image, text, link }: Props) => {
  return (
    <Link href={link} passHref>
      <a className="relative group cursor-pointer">
        <Image
          src={image}
          layout="responsive"
          sizes="50vw"
          alt={text}
          className="group-hover:grayscale transition-all duration-300"
        />
        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] text-white bg-dark-overlay flex justify-center items-end pb-9">
          <p className="text-[25px] leading-[27.5px] font-druk text-center px-6 group-hover:opacity-70 transition-opacity duration-300">
            {text}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ImgLink;
