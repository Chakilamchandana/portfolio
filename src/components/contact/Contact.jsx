import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3qcxopr",
        "template_66iky0a",
        form.current,
        "TsKwzwPQpAIepSELp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h4>Get in Touch</h4>
      <h3>Contact Me</h3>

      <div className="contact__container">
        <div className="waytocontact">
          <article className="contact_option">
            <a href="mailto:schakil@iu.edu" target="_blank" rel="noreferrer">
              <MdOutlineMail className="contact-icon" />
              Connect via email
            </a>
          </article>

          <article className="contact_option">
            <a
              href="https://www.linkedin.com/in/srichandana-chakilam/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="contact-icon" />
              Let's talk on LinkedIn
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Your email address"
            name="email"
            required
          />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="What's on your mind?"
          ></textarea>
          <button type="submit" className="btn btn-primary sendbtn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
