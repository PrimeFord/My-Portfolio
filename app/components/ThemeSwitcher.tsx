"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="dark:text-[#FBFBFB]">
      ThemeSwitcher: {theme}
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default ThemeSwitcher;
