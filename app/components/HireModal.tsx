import Image from "next/image";
import React from "react";

const HireModal = ({ isVisible, onClose }: any) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-centers"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col p-[2rem]">
        <button className="w-fit place-self-end" onClick={() => onClose()}>
          <Image
            // className="place-self-end "
            src="./images/close.svg"
            alt="Close"
            width={24}
            height={24}
          />
        </button>
        <div className="bg-[#FBFBFB] p-[2rem]"></div>
      </div>
    </div>
  );
};

export default HireModal;
