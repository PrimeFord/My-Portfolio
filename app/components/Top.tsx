"use client";
import React, { useEffect, useState } from "react";

const Top = () => {
  const [visible, setVisible] = useState(false);

  let prev = window.scrollY;
  const navPos = () => {
    let currenSc = scrollY;
    if (prev < currenSc) {
      console.log("show");
      setVisible(true);
    }
    if (prev > currenSc) {
      console.log("hide");
      setVisible(false);
    }
    prev = currenSc;
  };
  useEffect(() => {
    window.addEventListener("scroll", navPos);
    // setVisible(true);
  }, []);
  return (
    <div
      className={`fixed drop-shadow-lg bottom-[4rem] right-[1.5rem] transition-all duration-1000 ease-in-out ${
        visible ? "" : "transform translate-y-40 "
      }`}
    >
      <a href="#top">
        <p className="w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-lg bg-[#263138] dark:bg-[#FBFBFB] bg-opacity-[0.85] shadow-xl">
          <img
            className="h-[1.75rem] w-[1.75rem]"
            src="./images/top.svg"
            alt="arrow-up"
          />
        </p>
      </a>
    </div>
  );
};

export default Top;
