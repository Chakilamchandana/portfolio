import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__comp" rel="noreferrer">
        Srichandana Chakilam
      </a>
      <div className="footer__container">
        <ul className="links">
          <li>
            <a href="#" rel="noreferrer">
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
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__cr">
          <small>&copy;Srichandana Chakilam. All rights reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
