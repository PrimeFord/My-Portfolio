"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import "./ThemeSwitcher.css";

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
      <label htmlFor="darkmode_toggle" className="">
        <img className="sun" src="./images/sun.svg" alt="sun" />
        <img className="moon" src="./images/moon.svg" alt="moon" />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
