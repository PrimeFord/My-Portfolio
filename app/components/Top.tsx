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
      className={`fixed bottom-[4rem] right-[1.5rem] transition-all duration-1000 ${
        visible ? "" : "bottom-[-4rem]"
      }`}
    >
      <a href="#home">
        <p className="w-fit rounded-[50%] border-2 border-solid border-[#263138] shadow-xl">
          <img
            className="h-[1.75rem] w-[1.75rem]"
            src="./images/arrow (2).svg"
            alt="arrow-up"
          />
        </p>
      </a>
    </div>
  );
};

export default Top;
