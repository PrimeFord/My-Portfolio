import React from "react";

const Phone = () => {
  return (
    <div className="w-[13rem] font-[500] text-center">
      <h2 className="text-[1.25rem] font-[700] mb-5">Contact Me</h2>
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="flex gap-2 items-center hover:text-[1.15rem]">
          <img className="h-6 w-6" src="./images/phone.svg" alt="" />
          <span>+234 816 661 9654</span>
        </p>
        <p className="flex gap-2 items-center hover:text-[1.15rem]">
          <img className="h-6 w-6" src="./images/mail.svg" alt="" />
          <span>wolabash@gmail.com</span>
        </p>
        <p className="flex gap-2 items-center hover:text-[1.15rem]">
          <img className="h-6 w-6" src="./images/map.svg" alt="" />
          <span>Lagos, Nigeria.</span>
        </p>
      </div>
    </div>
  );
};

export default Phone;
