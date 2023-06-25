import React from "react";
import OfficeDesk from "./OfficeDesk";
import Image from "next/image";

const HomeCard = () => {
  return (
    <div
      className="h-fit lg:h-[100vh] w-[100%] pt-[10rem] px-[1rem] lg:px-[8rem] dark:text-[#FBFBFB] flex shadow-lg"
      id="home"
    >
      <div className="h-[100%] w-[100%] lg:w-[60%] pb-2 flex flex-col">
        <p className="text-[1.5rem] lg:text-[2.5rem] font-[700] mb-5">
          Hi, I am
        </p>
        <p className="text-[2.25rem] lg:text-[3.5rem] font-[700] mb-5 leading-[3.5rem]">
          MuhammedFuad Bashar
        </p>
        <p className="text-[1.5rem] lg:text-[1.8rem] font-[500] mb-10">
          Software Engineer / Front-End Developer
        </p>
        <div className="mb-[6rem] flex flex-col lg:flex-row justify-start lg:items-center gap-4">
          <button className="w-fit rounded-md bg-[#263138] text-[#FBFBFB] dark:bg-[#FBFBFB] dark:text-[#263138] py-2 px-4 drop-shadow-xl transition duration-700 ease-in-out hover:scale-[1.15] hover:transition hover:ease-in-out hover:duration-700">
            View Resume
          </button>
          <a href="#">
            <p className="px-2 flex items-center transition duration-700 ease-in-out hover:scale-[1.15] hover:transition hover:ease-in-out hover:duration-700">
              Download CV{" "}
              <span className="animate-bounce">
                <Image
                  src="/images/download.svg"
                  alt="download"
                  width={24}
                  height={24}
                />
              </span>
            </p>
          </a>
        </div>
        <OfficeDesk />
      </div>
      <div className="w-[40%] lg:block hidden">picture</div>
      {/* <div className=" w-[30%]">resume</div> */}
    </div>
  );
};

export default HomeCard;
