import React from "react";
import { usingData } from "../utility/data";

const Using = () => {
  return (
    <div className="w-[100%] text-left">
      <p className="text-[1.8rem] font-[500] mb-[2rem]">Using now:</p>
      <div className="flex flex-wrap gap-[1rem] px-[5rem] justify-start text-center items-center">
        {usingData.map((e, i) => (
          <img
            src={e.src}
            alt={e.alt}
            title={e.title}
            key={e.title}
            // className="w-[7.5rem]"
            width={"100px"}
          />
        ))}
      </div>
    </div>
  );
};

export default Using;
