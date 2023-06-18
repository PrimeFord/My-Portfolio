import Image from "next/image";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div className="w-[100%] h-[100vh] bg-[#D7D7D7]">
      {" "}
      {/* //#DFDFDF */}
      <NavBar />
      <HomePage />
    </div>
  );
}
