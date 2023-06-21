import React from "react";
import OfficeDesk from "./OfficeDesk";

const Footer = () => {
  return (
    <div className="w-[100%] py-[0.75rem] text-center flex items-center shadow-inner">
      <p className="w-[50%]">
        Copyright ©2023 Bashar Muhammedfuad. All Rights Reserved
      </p>
      <p className="">
        <OfficeDesk />
      </p>
      <a href="#home">
        <p className="w-fit rounded-[50%] border-2 border-solid border-black">
          <img
            className="h-8 w-8"
            src="./images/arrow (2).svg"
            alt="arrow-up"
          />
        </p>
      </a>
    </div>
  );
};

export default Footer;
