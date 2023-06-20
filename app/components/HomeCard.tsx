import React from "react";
import OfficeDesk from "./OfficeDesk";

const HomeCard = () => {
  return (
    <div className="h-[100vh] w-[100%] pt-[10rem] px-[8rem] flex" id="home">
      <div className="h-[100%] w-[50%] flex flex-col">
        <p className="text-[2.5rem] font-[700] mb-5">Hi, I am</p>
        <p className="text-[3.5rem] font-[700] mb-5 leading-[3.5rem]">
          MuhammedFuad Bashar
        </p>
        <p className="text-[1.8rem] font-[500] mb-10">
          Software Engineer / Front-End Developer
        </p>
        <div className="mb-[8rem] flex flex-col gap-2">
          <button
            className="w-fit rounded-md bg-[#0B0B0B] text-[#fff] py-2 px-4 
        "
          >
            View Resume
          </button>
          <a href="#">
            <p className="px-2 flex items-center">
              Download CV{" "}
              <span>
                <img
                  src="/images/download.svg"
                  alt="download"
                  className=" w-[1.25rem]"
                />
              </span>
            </p>
          </a>
        </div>
        <OfficeDesk />
      </div>
      <div className=" w-[40%]">picture</div>
      {/* <div className=" w-[30%]">resume</div> */}
    </div>
  );
};

export default HomeCard;
