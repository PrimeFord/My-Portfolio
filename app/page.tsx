import NavBar from "./components/NavBar";
import HomeCard from "./components/HomeCard";
import AboutCard from "./components/AboutCard";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import Top from "./components/Top";

export default function Home() {
  return (
    <div className="w-[100%] h-fit bg-[#FBFBFB] relative">
      <NavBar />
      <HomeCard />
      <AboutCard />
      <SkillCard />
      <ProjectCard />
      <ContactCard />
      <Footer />
      <Top />
    </div>
  );
}
