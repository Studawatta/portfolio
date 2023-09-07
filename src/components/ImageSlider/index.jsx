import React, { useState } from "react";
import { projects } from "../../data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ImageSlider = ({ viewImage, index }) => {
  const [curr, setCurr] = useState(0);

  return (
    <div className="fixed left-0 top-16  z-50 h-[calc(100vh-64px)]  w-[100vw] bg-[#333333]">
      <span
        className=" ml-auto mr-12 block h-20 w-fit cursor-pointer px-2 text-right text-[48px] text-slate-400"
        onClick={() => viewImage(false)}
      >
        X
      </span>
      <div className="flex h-[calc(100vh-160px)] items-center justify-center">
        <div className="m-auto flex w-[100%] items-center justify-between md:h-[500px] md:w-[60%]">
          <span
            className=" cursor-pointer rounded-full bg-gray-600 p-2 text-white "
            onClick={() => {
              if (curr > 0) {
                setCurr(curr - 1);
              }
            }}
          >
            <ArrowBackIosNewIcon className="" />
          </span>
          <div className="flex h-full w-[90%] overflow-hidden ">
            <div
              className="flex transition-transform duration-[1000ms] ease-in-out"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {projects[index].images.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  alt="Img"
                  className="h-[250px] w-full md:h-full md:object-contain"
                />
              ))}
            </div>
          </div>
          <span
            className=" cursor-pointer rounded-full bg-gray-600 p-2 text-white "
            onClick={() => {
              if (curr < projects[index].images.length - 1) {
                setCurr(curr + 1);
              }
            }}
          >
            <ArrowForwardIosIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
