import React from "react";
import Using from "./Using";
import Learn from "./Learn";

const SkillCard = () => {
  return (
    <div className="h-[100vh] w-[100%] pt-[8rem] px-[8rem] flex flex-col items-center">
      <h3 className="text-[3.5rem] leading-[3.5rem] font-[700] mb-5">Skills</h3>
      <h2 className="text-[2.5rem] font-[700] mb-5">Technologies and Skills</h2>
      <div className="w-[100%] mb-[3rem]">
        <Using />
      </div>
      <div className="w-[100%]">
        <Learn />
      </div>
    </div>
  );
};

export default SkillCard;
