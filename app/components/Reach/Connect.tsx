import React from "react";
import { socialData } from "../../utility/data";
// interface Props {
//   head: String;
//   p?: String;
// }

const Connect = () => {
  //   const array = props.p;
  return (
    <div className="w-[12rem] font-[500] text-center">
      <h2 className="text-[1.25rem] font-[700] mb-5">Connect</h2>
      <div className="flex flex-col gap-2">
        {socialData.map((e, i) => (
          <a key={e.name} href={e.link} target="_blank">
            <p className="hover:text-[1.15rem]">{e.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Connect;
