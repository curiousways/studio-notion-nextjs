import { ReactChildren, ReactChild } from "react";

import { useAppContext } from "@/context/AppContext";

import Nav from "@/components/common/Nav";
import Footer from "@/components/common/Footer";

type Props = {
  children: ReactChild | ReactChildren;
};

const Layout = ({ children }: Props) => {
  const { pageTheme } = useAppContext();

  return (
    <div className={`${pageTheme && pageTheme}`}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
