import React from "react";
import { styles } from "../../styles";
import whiteLogo from "../../assets/images/whiteLogo.png";

const Landing = () => {
  return (
    <div id="home">
      <div className={` flex h-fit max-h-[750px] flex-col`}>
        <div className="mt-[120px] flex  flex-row items-start gap-5">
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915eff]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Sandun</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Design minded fullstack developer <br />
              <span className="text-[24px]">
                Wanna see more? Just check my{" "}
                <a className="cursor-pointer text-[#915eff] ">resume</a>.
              </span>
            </p>
          </div>
        </div>
        <div className=" -top-28 mx-auto h-[200px] w-[200px] md:relative md:h-[350px] md:w-[350px]">
          <img
            src={whiteLogo}
            className="animate-pulse1 cursor-pointer rounded-full hover:animate-pulse2"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
