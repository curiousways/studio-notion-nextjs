import React from "react";

type Props = {
  title: string;
  summary: string;
};

const Header = ({ title, summary }: Props) => {
  return (
    <header className="space-y-10 text-center mt-[105px]">
      <h1 className="max-w-[945px] mx-auto">{title}</h1>
      <p className="max-w-[860px] mx-auto">{summary}</p>
    </header>
  );
};

export default Header;
