import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./header.css";
import Action from "./Action";
import myimage from "../../assets/Subject 4.png";
import HeaderSocials from "./HeaderSocials.jsx";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "a Computer Science Graduate...",
      "a Full-Stack Web Developer...",
      "and a Passionate Software Engineer...",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <header>
      <div className="header__container">
        <h4>Hello there! I'm</h4>
        <h1>Srichandana Chakilam</h1>
        <h4>
          {" "}
          I'm <span className="typetext">{text}</span>
          <span>
            <Cursor />
          </span>
        </h4>
        <Action />
        <HeaderSocials />
        <div className="me">
          <img src={myimage} alt="Srichandana Chakilam" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
