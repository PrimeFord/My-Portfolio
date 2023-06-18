import NavBar from "./components/NavBar";
import HomeCard from "./components/HomeCard";
import AboutCard from "./components/AboutCard";

export default function Home() {
  return (
    <div className="w-[100%] h-fit bg-[#D7D7D7]">
      {" "}
      {/* //#DFDFDF */}
      <NavBar />
      <HomeCard />
      <AboutCard />
    </div>
  );
}
