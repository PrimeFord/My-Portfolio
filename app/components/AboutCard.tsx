import React from "react";

const AboutCard = () => {
  return (
    <div className="h-[80vh] w-[100%] p-[8rem] flex justify-between" id="about">
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
        {/* <p>
        Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
        </p> */}
      </div>
    </div>
  );
};

export default AboutCard;
