import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="forms">
      <section>
        <label htmlFor="Firstname">First name</label>
        <input
          type="text"
          name="firstname"
          id="first_name"
          placeholder="firstname"
        />
      </section>
      <section>
        <label htmlFor="Lastname">Last name</label>
        <input
          type="text"
          name="lastname"
          id="last_name"
          placeholder="lastname"
        />
      </section>
      <section>
        <label htmlFor="Firstname">Email</label>
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
          type="text"
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
      <section className="submit">
        <button type="submit" className="flex items-center gap-4">
          Submit{" "}
          <img className="h-5 w-5" src="./images/send-1.svg" alt="send" />
          {/* <img
            className="h-5 w-5 hidden hover:block"
            src="./images/send-2.svg"
            alt="send"
          /> */}
        </button>
      </section>
    </div>
  );
};

export default Form;
