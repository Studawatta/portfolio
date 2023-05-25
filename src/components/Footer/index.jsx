import React from "react";
import { logo } from "../../assets";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="flex h-28 w-full items-center justify-between border-t-2 border-slate-500 px-[8%]">
      {/* LEFT  */}
      <div>
        <img src={logo} alt="logo" className="h-14 w-14" />
      </div>
      {/* MIDDLE  */}
      <div>
        <span className="font-poppings text-lg text-white">
          Copyright © 2022 Sandun Thisara.
        </span>
      </div>
      {/* RIGHT */}
      <AnchorLink href="#home">
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-[28px] text-blue-600 hover:animate-bounce">
          <HiOutlineArrowNarrowUp />
        </div>
      </AnchorLink>
    </div>
  );
};

export default Footer;
