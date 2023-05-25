import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { navLinks } from "../../data/index";
import useMediaQuary from "../../hooks/useMediaQuary";
import { HiOutlineMenu, HiOutlineX, HiMoon } from "react-icons/hi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuary("(min-width:768px");
  return (
    <>
      <div className="fixed top-0 z-10 flex h-16 w-full items-center justify-between border-b-2 border-b-slate-400 bg-white/0 px-[8%]  backdrop-blur-[10px]">
        {/* NAV_LEFT */}
        <AnchorLink href="#home">
          <div className="flex h-fit cursor-pointer items-center  gap-2 font-bold text-white">
            <img src={logo} alt="logo" className="h-12 w-12" />
            <span className=" font-poppings">Sandun Thisara</span>
          </div>
        </AnchorLink>

        {/* NAV_RIGHT  */}
        <div className="flex h-8 w-fit items-center gap-8 ">
          {isAboveMediumScreens ? (
            <div className="flex h-8 w-fit items-center gap-8 ">
              {navLinks.map((link) => {
                return (
                  <span
                    className="cursor-pointer font-inter font-semibold text-secondary hover:text-white"
                    key={link.id}
                  >
                    <AnchorLink href={`#${link.id}`}>{link.title}</AnchorLink>
                  </span>
                );
              })}
            </div>
          ) : (
            <HiOutlineMenu
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className="text-[24px] text-white transition  duration-500"
            />
          )}
          <span className="flex cursor-pointer items-center gap-1 text-white">
            Dark
            <HiMoon />
          </span>
        </div>
      </div>
      {/* MOBILE_MENU_MODEL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 z-40 mt-16 h-fit w-[190px]  bg-black">
          {/* CLOSE_ICON */}
          <div className=" flex w-full justify-end  ">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className="mr-4"
            >
              <HiOutlineX className="text-[24px] text-white" />
            </button>
          </div>
          {/* MENU_ITEMS */}
          <div className=" flex  flex-col items-center  gap-6 pb-4 pt-2">
            {navLinks.map((link) => {
              return (
                <span
                  className="cursor-pointer font-inter font-semibold text-secondary hover:text-white"
                  key={link.id}
                >
                  {link.title}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
