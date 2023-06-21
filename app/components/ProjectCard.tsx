import React from "react";
import Projects from "./Projects";

const ProjectCard = () => {
  return (
    <div
      className="h-fit w-[100%] py-[5rem] px-[8rem] flex flex-col items-center shadow-lg"
      id="projects"
    >
      <h2 className="text-[3.5rem] leading-[3.5rem] font-[700] mb-5">
        Projects
      </h2>
      {/* <h2 className="text-[2.5rem] font-[700] mb-5">Technologies and Skills</h2> */}
      <p className="text-[1.25rem] font-[500] mb-[2rem] text-center">
        These frontend mobile and web applications projects, were built and
        written with HTML, CSS and JavaScript using Reactjs | Nextjs and Vitejs
        frameworks with full mobile responsiveness.
      </p>
      <div className="w-[100%]">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectCard;
