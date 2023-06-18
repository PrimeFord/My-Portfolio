import React from "react";
import OfficeDesk from "./OfficeDesk";

const HomePage = () => {
  return (
    <div className="h-[100vh] w-[100%] pt-[8rem] px-[8rem] flex">
      <div className="h-[100%] w-[50%] flex flex-col">
        <p className="text-[2.5rem] font-[700] mb-5">Hi, I am</p>
        <p className="text-[3.5rem] font-[700] mb-5 leading-[3.5rem]">
          MuhammedFuad Bashar
        </p>
        <p className="text-[1.8rem] font-[500] mb-10">
          Software Engineer / Front-End Developer
        </p>
        <button>View Resume</button>
        <OfficeDesk />
      </div>
      <div className=" w-[40%]">picture</div>
      {/* <div className=" w-[30%]">resume</div> */}
    </div>
  );
};

export default HomePage;
