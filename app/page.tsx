// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import NavBar from "./components/NavBar";
import HomeCard from "./components/HomeCard";
import AboutCard from "./components/AboutCard";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import Top from "./components/Top";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  // const { theme, setTheme } = useTheme();
  // const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="w-[100%] h-fit bg-[#FBFBFB] dark:bg-[#263138] relative" id="top">
      <NavBar />
      <HomeCard />
      <ThemeSwitcher />
      <AboutCard />
      <SkillCard />
      <ProjectCard />
      <ContactCard />
      <Footer />
      <Top />
    </div>
  );
}
