"use client";
import React, { useState } from "react";
import { projectData } from "../utility/data";
import "./Projects.css";
import Image from "next/image";

const Projects = () => {
  const [fullString, setFullString] = useState(false);
  const trauncateString = (string: string) => {
    return `${string.substr(0, 85)}...`;
  };

  return (
    <div className="grid grid-cols-3 gap-[2rem]">
      {projectData.map((e, i) => (
        <div
          key={i}
          className="view" //border: 10px solid #fff margin: 10px;
        >
          {/* <p> */}
          <Image
            className="bac"
            src={e.img}
            alt={e.title}
            height={240}
            width={352}
          />
          {/* </p> */}
          <div className="mask">
            <h2 className="">{e.title}</h2>
            <p className="">{trauncateString(e.desc)}</p>
            {/* <h3 className="not-italic  mb-2">{e.tools}</h3> */}
            <a href={e.link} target="_blank" className="underline">
              View Website
            </a>
            <a href={e.github} target="_blank">
              <Image
                src="./images/github-f.svg"
                alt={e.title}
                className="w-8 h-8 animate-bounce absolute bottom--[0.5rem] right-0"
                height={32}
                width={32}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
