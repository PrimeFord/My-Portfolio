import React from "react";

const OfficeDesk = () => {
  return (
    <div className="flex gap-4">
      <p>
        <a href="https://linkedin.com/in/muhammedfuad-bashar" target="_blank">
          <img
            className="w-[1.5rem] height-[1.5rem]"
            src="./images/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
      </p>
      <p>
        <a href="https://github.com/PrimeFord" target="_blank">
          <img
            className="w-[1.5rem] height-[1.5rem]"
            src="./images/github.svg"
            alt="Github"
          />
        </a>
      </p>
      <p>
        <a href="https://twitter.com/BMuhammedfuad" target="_blank">
          <img
            className="w-[1.5rem] height-[1.5rem]"
            src="./images/twitter.svg"
            alt="Twitter"
          />
        </a>
      </p>
      <p>
        <a href="mailto:wolabash@gmail.com" target="_blank">
          <img
            className="w-[1.5rem] height-[1.5rem]"
            src="./images/mail.svg"
            alt="Email"
          />
        </a>
      </p>
    </div>
  );
};

export default OfficeDesk;
