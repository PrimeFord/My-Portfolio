"use client";

import React, { useEffect, useState } from "react";
import { navData } from "../utility/data";
import ThemeSwitcher from "./ThemeSwitcher";
import HireMe from "./HireMe";
const NavBar = ({ setShowModal }: any) => {
  const [navbar, setNavbar] = useState(false);
  const [visible, setVisible] = useState(false);
  let prev = window.scrollY;
  const navBg = () => {
    if (window.scrollY >= 85) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const navPos = () => {
    let currenSc = scrollY;
    // prev > currenSc ? setVisible(false) : setVisible(true);
    if (prev > currenSc || currenSc === 0) {
      console.log("show");
      setVisible(true);
    }
    if (prev < currenSc) {
      console.log("hide");
      setVisible(false);
    }
    prev = currenSc;
  };
  useEffect(() => {
    window.addEventListener("scroll", navBg);
    // console.log(window.scrollY);
    window.addEventListener("scroll", navPos);
    setVisible(true);
  }, []);
  const logo = "Prime.";
  return (
    <nav
      className={`w-full h-[5rem] fixed flex items-center p-4 lg:p-0 justify-between lg:justify-around z-30 transition ease-in-out duration-700 shadow-xl bg-opacity-80 dark:bg-opacity-80 top-0 backdrop-blur-[5px]
     ${
       navbar
         ? "bg-[#263138] text-[#FBFBFB] transition duration-700" // dark:bg-[#FBFBFB] dark:text-[#263138]
         : "bg-[#FBFBFB] text-[#263138] transition duration-700 dark:bg-[#263138] dark:text-[#FBFBFB]"
     }${visible ? "" : "transition-all duration-1000 translate-y-[-5rem]"}`}
    >
      <div className="w-[40%] flex-grow-1">
        <a href="#home">
          <p className=" text-[1.8rem] lg:text-[3.2rem]">{logo}</p>
        </a>
      </div>
      <div className="lg:flex  w-[40%] justify-between font-[500] hidden ">
        {navData.map((e, i) => (
          <div key={i}>
            <a href={e.route}>{e.name}</a>
          </div>
        ))}
      </div>
      <ThemeSwitcher />
      <div className="hidden lg:block">
        <button
          className="w-fit rounded-md bg-[#263138] dark:bg-[#FBFBFB] dark:text-[#263138] text-[#FBFBFB] py-2 px-4 drop-shadow-xl transition duration-700 ease-in-out hover:scale-[1.15] text-right hover:transition hover:ease-in-out hover:duration-700"
          onClick={() => setShowModal(true)}
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
