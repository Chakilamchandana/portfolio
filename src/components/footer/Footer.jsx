import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#about" className="footer__comp" rel="noreferrer">
        SC
      </a>
      <div className="footer__container">
        <ul className="links">
          <li>
            <a href="/" rel="noreferrer">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__cr">
          <small>
            <i>Copyright&copy;2024. All rights reserved</i>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
