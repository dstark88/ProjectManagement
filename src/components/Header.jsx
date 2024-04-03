import React from "react";

const Header = () => {
  return (
    <header>
      <div className="px-10 flex fixed h-[90px] z-20 w-full overflow-auto top-0 bg-slate-600 text-stone-200 justify-between items-center">
        <a
          className="text-[35px] hover:text-stone-400"
          href="https://dstark88.github.io/portfolio/"
        >
          Denise Stark
        </a>
        <a
          className="text-[20px] hover:text-stone-400"
          href="https://dstark88.github.io/portfolio/"
          target="blank"
        >
          Portfolio
        </a>
      </div>
    </header>
  );
};

export default Header;
