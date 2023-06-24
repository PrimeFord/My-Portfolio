"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import "./ThemeSwitcher.css";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [on, setOn] = useState(false);

  const setThem = () => {
    setOn(!on);
    if (on === false) {
      setTheme("dark");
    }
    if (on === true) {
      setTheme("light");
    }
  };
  useEffect(() => {
    setTheme("light");
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="h-[2.5rem] pt-2 text-center relative flex items-center justify-center dark:text-[#FBFBFB]">
      <input type="checkbox" id="darkmode_toggle" onClick={setThem} />
      <label htmlFor="darkmode_toggle" className="labl">
        <Image
          className="sun"
          src="./images/sun.svg"
          alt="sun"
          height={19.2}
          width={19.2}
        />
        <Image
          className="moon"
          src="./images/moon.svg"
          alt="moon"
          height={19.2}
          width={19.2}
        />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
