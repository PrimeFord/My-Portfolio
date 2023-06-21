"use client";

import React, { useEffect, useState } from "react";
import { navData } from "../utility/data";
const NavBar = () => {
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
    if (prev > currenSc) {
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
  }, []);
  const logo = "Prime.";
  return (
    <nav
      className={`w-full h-[5rem] fixed flex items-center justify-around z-30 transition ease-in-out duration-700 shadow-xl ${
        navbar
          ? "bg-[#263138] text-[#FBFBFB] transition duration-700 ease-in-out"
          : "bg-transparent text-[#263138] transition duration-700 ease-in-out"
      }${
        visible
          ? ""
          : "absolute top-[-5rem] transition-all duration-1000 ease-in-out"
      }`}
    >
      <div className="w-[40%] flex-grow-1">
        <a href="#home">
          <p className=" text-[3.2rem]">{logo}</p>
        </a>
      </div>
      <div className="flex  w-[40%] justify-between font-[500]">
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
