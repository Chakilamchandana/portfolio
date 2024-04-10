import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsWordpress } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/srichandana-chakilam/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://wordpress.com/view/readithere142929319.wordpress.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsWordpress />
      </a>
      <a
        href="https://github.com/Chakilamchandana"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
