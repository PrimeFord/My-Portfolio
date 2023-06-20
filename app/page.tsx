import NavBar from "./components/NavBar";
import HomeCard from "./components/HomeCard";
import AboutCard from "./components/AboutCard";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-[100%] h-fit bg-[#D7D7D7]">
      {" "}
      {/* //#DFDFDF */}
      <NavBar />
      <HomeCard />
      <AboutCard />
      <SkillCard />
      <ProjectCard />
      <ContactCard />
      <Footer />
    </div>
  );
}
