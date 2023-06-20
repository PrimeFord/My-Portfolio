import React from "react";
import { projectData } from "../utility/data";

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-[2rem]">
      {projectData.map((e, i) => (
        <div
          key={i}
          className="h-[15rem] w-fit bg-cover bg-center bg-[red] hover:bg-[#00000069] rounded-[1rem] text-center"
          //   style={"background-image:url('./image/snip.png') "}
        >
          <p>
            <img className="rounded-t-[1rem] " src={e.img} alt={e.title} />
          </p>
          <h2 className="font-[500] m-[1rem]">{e.title}</h2>
          <div className="hidden hover:block"></div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
