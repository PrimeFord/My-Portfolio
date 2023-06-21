import { navData } from "@/app/utility/data";
import React from "react";

const Outline = () => {
  return (
    <div className="w-[12rem] font-[500] text-center">
      <h2 className="text-[1.25rem] font-[700] mb-5">Prime.</h2>
      <div className="flex flex-col gap-2">
        {navData.map((e, i) => (
          <a key={i} href={e.route}>
            <p className="hover:text-[1.15rem]">{e.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Outline;
