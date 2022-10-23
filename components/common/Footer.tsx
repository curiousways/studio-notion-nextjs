import Link from "next/link";

import { useAppContext } from "@/context/AppContext";

const Footer = () => {
  return (
    <footer className="bg-faded">
      <div className="flex flex-col justify-center items-center py-20 xl:py-[118px] space-y-[54px]">
        <h2 className="uppercase text-3xl">Get in touch</h2>
        <Link href="mailto:info@notion.online" passHref>
          <a className="underline underline-offset-4">info@notion.online</a>
        </Link>
        </div>
    </footer>
  );
};

export default Footer;
