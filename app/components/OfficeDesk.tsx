import React from "react";

const OfficeDesk = () => {
  return (
    <div className="flex gap-4">
      <p>
        <a href="https://linkedin.com/in/muhammedfuad-bashar" target="_blank">
          <img
            className="w-[2rem] height-[2rem]"
            src="./images/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
      </p>
      <p>
        <a href="https://github.com/PrimeFord" target="_blank">
          <img
            className="w-[2rem] height-[2rem]"
            src="./images/github-fill.svg"
            alt="Github"
          />
        </a>
      </p>
      <p>
        <a href="https://twitter.com/BMuhammedfuad" target="_blank">
          <img
            className="w-[2rem] height-[2rem]"
            src="./images/twitter-fill.svg"
            alt="Twitter"
          />
        </a>
      </p>
      <p>
        <a href="https://mailto:wolabash@gmail.com" target="_blank">
          <img
            className="w-[2rem] height-[2rem]"
            src="./images/mail-fill.svg"
            alt="Email"
          />
        </a>
      </p>
    </div>
  );
};

export default OfficeDesk;
