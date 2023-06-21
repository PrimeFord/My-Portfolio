import React from "react";
import OfficeDesk from "./OfficeDesk";

const Footer = () => {
  return (
    <div className="w-[100%] px-[5rem] py-[0.75rem] text-center flex justify-between items-center shadow-inner">
      <p className="">
        <OfficeDesk />
      </p>
      <p className="">
        Copyright ©2023 Bashar Muhammedfuad. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
