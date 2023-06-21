import React from "react";
import Form from "./Form";
import Connect from "./Reach/Connect";
import { socialData } from "../utility/data";
import Project from "./Reach/Project";
import Outline from "./Reach/Outline";
import Platform from "./Reach/Platform";

const ContactCard = () => {
  return (
    <div className="h-fit w-[100%] py-[5rem] px-[8rem] flex flex-col shadow-lg ">
      <div className="w-[100%] flex items-center" id="contact">
        {/* mailto:wolabash@gmail.com?subject=resume&body=smx%20sxj%20sj%20s%20jmzxkjsc%2Flkcksc */}
        <div className="w-[50%] flex">
          <Outline />
          <Project />
          <Connect />
        </div>
        <div className="w-[50%]">
          <h2 className="text-[2.5rem] leading-[3.5rem] font-[700] mb-5">
            Contact
          </h2>
          <p className="text-[1.25rem] font-[500] mb-[2rem]">
            I would love to hear from you
          </p>
          <Form />
        </div>
      </div>
      <div className="w-[100%] h-[20rem] pt-[3rem] flex gap-[1rem]">
        <Outline />
        <Project />
        <Connect />
        <Platform />
        <div></div>
      </div>
    </div>
  );
};

export default ContactCard;
