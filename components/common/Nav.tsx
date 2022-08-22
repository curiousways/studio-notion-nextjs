import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import NavLink from "./NavLink";
import MobileNav from "./MobileNav";

import { navLinks } from "@/data/index";

const Nav = () => {
  const { asPath } = useRouter();
  const isHomePage =
    asPath === "/" || (asPath.lastIndexOf("/") === 0 && asPath.includes("/#"));
  const hamburgerFill = isHomePage ? "white" : "black";
  const navTheme = isHomePage ? "light" : "dark";

  const [showNav, setShowNav] = useState(false);

  const closeNav = () => {
    setShowNav(false);
  };

  const openNav = () => {
    setShowNav(true);
  };

  return (
    <div className="container z-50">
      <div
        className={`relative z-50 pt-9 xl:pt-[50px] flex items-start justify-between ${
          navTheme === "light" && "text-white"
        }`}
      >
        <Link href="/" passHref>
          <a aria-label="brand logo">
            <svg
              width="194"
              height="60"
              viewBox="0 0 194 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_312_609)">
                <path
                  d="M20.4525 38.3228L15.2306 25.29H0V59.773H14.2278V44.7541L20.0363 59.773H34.6804V25.309H20.4525V38.3228ZM140.897 12.7491V11.7465C140.897 5.80706 136.981 0.453972 123.302 0.453972H105.119V24.3443H123.302C137.756 24.3443 140.897 18.4237 140.897 12.7491ZM115.961 17.4401V7.35813H121.674C128.997 7.35813 129.678 10.4981 129.678 12.2005V12.3897C129.678 14.1299 129.034 17.4212 121.674 17.4212H115.961V17.4401ZM22.1553 8.83354L17.5956 8.73897C13.5467 8.64439 12.7142 8.03909 12.7142 7.09332V7.05549C12.7142 6.18537 13.2251 5.54224 16.9523 5.54224H17.1037C21.1526 5.54224 21.6256 6.92308 21.7012 7.75536H33.9046V7.52837C33.9046 3.57503 31.0477 0.0189155 18.6551 0.0189155H15.1171C3.784 0.037831 0.60544 3.08323 0.60544 7.28247V7.5662C0.60544 11.3304 2.85692 14.6974 12.4304 14.9811L17.1794 15.1135C21.7012 15.2459 22.1553 16.0782 22.1553 17.0429V17.0996C22.1553 18.1021 21.3796 19.029 17.5388 19.029H17.4064C13.2062 19.029 12.6764 17.232 12.6196 16.116H0.20812V16.3997C0.20812 19.483 1.58928 24.7793 15.4955 24.7793H19.1281C32.2397 24.7793 34.775 20.6936 34.775 16.5511V16.0971C34.775 11.2736 31.3694 9.06053 22.1553 8.83354ZM45.181 24.3443H56.041V7.9256H66.3524V0.453972H34.8696V7.9256H45.181V24.3443ZM178.983 25.309V38.3417L173.761 25.309H158.531V59.7919H172.758V44.773L178.567 59.7919H193.211V25.309H178.983ZM153.309 0.453972H142.524V24.3443H153.309V0.453972ZM74.8475 33.1589H79.3694V59.7919H94.9027V33.1589H99.4246V25.309H74.8286V33.1589H74.8475ZM102.168 59.7919H117.796V25.309H102.168V59.7919ZM103.076 0.453972H92.1971V10.6683C92.1971 13.43 90.9106 16.57 85.4805 16.57H85.4427C79.9181 16.57 78.7261 13.43 78.7261 10.6683V0.453972H67.8471V11.6898C67.8471 16.3808 69.7013 24.7226 84.7427 24.7226H86.2184C101.052 24.7226 103.076 16.3808 103.076 11.6898V0.453972ZM64.0253 25.082H45.7107C40.1293 25.082 37.5562 27.314 37.5562 32.4779V51.715C37.5562 57.8436 39.8455 60 45.7107 60H64.0253C70.1553 60 72.5203 58.0517 72.5203 51.715V32.4779C72.5203 27.0681 69.9094 25.082 64.0253 25.082ZM56.76 52.0744C56.76 53.7579 56.3437 54.5334 55.0193 54.5334C53.7895 54.5334 53.3355 53.7768 53.3355 52.0744V33.0076C53.3355 31.3241 53.8085 30.5107 55.0193 30.5107C56.2491 30.5107 56.76 31.3052 56.76 33.0076V52.0744ZM174.556 24.7793C190.392 24.7793 192.643 17.5158 192.643 12.8058V11.8411C192.643 7.05549 190.392 0 174.556 0H173.023C157.225 0 154.974 7.05549 154.974 11.8411V12.8058C154.974 17.5347 157.225 24.7793 173.023 24.7793H174.556ZM166.155 12.4275V12.0492C166.155 9.7604 167.631 7.0744 173.799 7.0744C179.835 7.0744 181.443 9.77932 181.443 12.0492V12.4842C181.443 14.8298 179.797 17.6482 173.799 17.6482C167.783 17.6671 166.155 14.773 166.155 12.4275ZM147.16 25.082H128.845C123.264 25.082 120.691 27.314 120.691 32.4779V51.715C120.691 57.8436 122.98 60 128.845 60H147.16C153.29 60 155.655 58.0517 155.655 51.715V32.4779C155.655 27.0681 153.025 25.082 147.16 25.082ZM139.876 52.0744C139.876 53.7579 139.459 54.5334 138.135 54.5334C136.905 54.5334 136.451 53.7768 136.451 52.0744V33.0076C136.451 31.3241 136.924 30.5107 138.135 30.5107C139.346 30.5107 139.876 31.3052 139.876 33.0076V52.0744Z"
                  fill={`${navTheme !== "light" ? "black" : "white"}`}
                />
              </g>
              <defs>
                <clipPath id="clip0_312_609">
                  <rect
                    width="193.211"
                    height="60"
                    fill={`${navTheme !== "light" ? "black" : "white"}`}
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </Link>

        {/* Hamburger */}
        <svg
          width="39"
          height="25"
          viewBox="0 0 39 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="xl:hidden w-6 h-6 md:w-9 md:h-9 cursor-pointer ml-auto"
          onClick={openNav}
        >
          <rect y="11" width="39" height="3" fill={hamburgerFill} />
          <rect y="22" width="39" height="3" fill={hamburgerFill} />
          <rect width="39" height="3" fill={hamburgerFill} />
        </svg>

        <nav>
          <MobileNav showNav={showNav} close={closeNav} />
          <ul className="hidden xl:flex justify-center xl:justify-start xl:gap-x-[53px] font-druk">
            {navLinks.map(({ text, link }) => (
              <li className="flex" key={text}>
                <NavLink href={link}>{text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
