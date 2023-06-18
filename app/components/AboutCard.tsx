import React from "react";

const AboutCard = () => {
  return (
    <div className="h-[80vh] w-[100%] p-[8rem] flex justify-between ">
      <div className="w-[40%] h-[100%] flex justify-center items-center">
        <p className="w-[20rem] h-[20rem] rounded-[50%] bg-slate-600"></p>
      </div>
      <div className="w-[60%] h-[100%] flex flex-col justify-center font-[500]">
        <h2 className="mb-[2rem] text-[1.25rem] font-[600]">About me</h2>
        <p>- 👋 Hi, I am MuhammedFuad Bashar.</p>
        <p>
          - 👨🏾‍💻 I am a software developer. I write frontend mobile and web
          applications with Reactjs | Nextjs and Vitejs frameworks.
        </p>
        <p>- 👨🏾‍💼 I have been writing codes for about 2years.</p>
      </div>
    </div>
  );
};

export default AboutCard;
