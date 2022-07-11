import Link from "next/link";

import { useAppContext } from "@/context/AppContext";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-20 xl:py-[118px] space-y-[54px]">
      <h2>GET IN TOUCH</h2>
      <Link href="mailto:info@studionotion.com" passHref>
        <a className=" underline underline-offset-4">info@studionotion.com</a>
      </Link>
    </footer>
  );
};

export default Footer;
