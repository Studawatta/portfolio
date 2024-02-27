import { styles } from "../../styles";
import whiteLogo from "../../assets/images/whiteLogo.png";
import logo from "../../assets/images/logo.png";

const Landing = ({ darkTheme, setDarkTheme }) => {
  return (
    <div id="home">
      <div className={` flex h-fit max-h-[750px] flex-col`}>
        <div className="mt-[120px] flex  flex-row items-start gap-5">
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-black dark:bg-[#915eff]" />
            <div
              className={`${
                darkTheme ? "violet-gradient" : "violet-gradient-light"
              } h-40 w-1 bg-black sm:h-80`}
            />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-slate-900`}>
              Hi, I'm{" "}
              <span className="text-[#311c5e] dark:text-[#915eff]">Sandun</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2`}>
              Design minded fullstack developer <br />
              {/* <span className="text-[24px]">
                Wanna see more? Just check my{" "}
                <a className="cursor-pointer text-[#352060] underline dark:text-[#915eff] ">
                  resume
                </a>
                .
              </span> */}
            </p>
          </div>
          z
        </div>
        <div className=" -top-28 mx-auto h-44 w-44 md:relative md:h-72 md:w-72">
          {darkTheme ? (
            <img
              src={whiteLogo}
              className="animate-pulse1 cursor-pointer rounded-full hover:animate-pulse2"
            />
          ) : (
            <img
              src={logo}
              className="animate-pulse1 cursor-pointer rounded-full hover:animate-pulse2"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
