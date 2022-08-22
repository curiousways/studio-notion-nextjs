import { motion } from "framer-motion";

import {
  MobileNavContainerVariants,
  listItemVariants,
} from "@/utils/animations";

import { classNames } from "@/utils/index";

import { navLinks } from "@/data/index";
import { useAppContext } from "@/context/AppContext";

import NavLink from "./NavLink";

type Props = {
  showNav: boolean;
  close: () => void;
};

const MobileNav = ({ showNav, close }: Props) => {
  const { pageTheme } = useAppContext();

  return (
    <motion.div
      initial="hidden"
      animate={showNav ? "visible" : "hidden"}
      variants={MobileNavContainerVariants}
      className={classNames(
        "fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black font-druk",
        pageTheme
      )}
    >
      {/* Close Nav */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="fixed top-3 md:top-5 right-4 w-9 h-9"
        viewBox="0 0 512 512"
        onClick={close}
        variants={listItemVariants}
      >
        <title>Close</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M368 368L144 144M368 144L144 368"
        />
      </motion.svg>

      <ul className="space-y-8">
        {navLinks.map(({ text, link }) => (
          <motion.li
            variants={listItemVariants}
            onClick={close}
            className="flex"
            key={text}
          >
            <NavLink href={link}>{text}</NavLink>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileNav;
