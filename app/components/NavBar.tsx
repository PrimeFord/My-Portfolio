import React from "react";
import { navData } from "../utility/data";
const NavBar = () => {
  const logo = "Prime.";
  return (
    <nav className="bg-[#0B0B0B] text-[#FFFFFF] w-full h-[5rem] fixed flex items-center justify-around">
      <div className="w-[40%] flex-grow-1">
        <a href="#home">
          <p className=" text-[3.2rem]">{logo}</p>
        </a>
      </div>
      <div className="flex  w-[40%] justify-between text-[#FFFFFF] font-[500]">
        {navData.map((e, i) => (
          <div key={i}>
            <a href={e.route}>{e.name}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
