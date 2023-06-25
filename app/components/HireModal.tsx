"use client";
import Image from "next/image";
import React from "react";
import "./Form.css";

const HireModal = ({ isVisible, onClose }: any) => {
  // const [subject,setSubject]

  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="w-[100vw] h-[100vh] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-centers"
      id="wrapper"
      onClick={handleClose}
    >
      <div className=" flex flex-col justify-center p-[2rem]">
        <button className="w-fit place-self-end" onClick={() => onClose()}>
          <Image
            // className="place-self-end "
            src="./images/close.svg"
            alt="Close"
            width={32}
            height={32}
          />
        </button>
        <div className="bg-[#FBFBFB] dark:bg-[#263138] dark:text-[#FBFBFB] p-[3rem] rounded-[1rem]">
          <h2 className="text-[1.8rem] border-b-2 border-b-solid border-b-#263138 dark:border-b-#FBFBFB mb-4">
            Hire Me
          </h2>
          <div className="forms p-2">
            <section>
              <label htmlFor="first_name">Full name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="fullname"
              />
            </section>
            <section>
              <label htmlFor="last_name">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="subject"
                // value={subject}
              />
            </section>
            <section>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@email.com..."
              />
            </section>
            <section>
              <label htmlFor="phone_no">Phone number</label>
              <input
                type="number"
                name="phone no"
                id="phone_no"
                placeholder="+234 81..."
              />
            </section>
            <section className="text">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                //   cols="10"
                //   rows="5"
                placeholder="message..."
              ></textarea>
            </section>
            <section className="submit dark:bg-[#FBFBFB] dark:text-[#263138] dark:hover:bg-[#263138] dark:hover:border-2 dark:hover:border-solid dark:hover:border-[#FBFBFB] dark:hover:text-[#FBFBFB]">
              <button type="submit" className="flex items-center gap-4">
                Submit
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
