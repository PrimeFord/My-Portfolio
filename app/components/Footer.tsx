import React from "react";
import OfficeDesk from "./OfficeDesk";

const Footer = () => {
  return (
    <div className="w-[100%] px-[2rem] py-[0.75rem] text-center flex justify-between items-center shadow-inner dark:text-[#FBFBFB]">
      <p className="">
        <OfficeDesk />
      </p>
      <p className="text-[0.8rem] font-[200]">
        Copyright ©2023 Bashar Muhammedfuad. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
