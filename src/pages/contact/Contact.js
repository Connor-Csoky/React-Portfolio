import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="formHolder">
      <h1>Contact Me</h1>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
