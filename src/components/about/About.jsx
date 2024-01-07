import React from "react";
import "./about.css";
import { MdInterests } from "react-icons/md";

import { TbBrandVsco } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h4>Get to know more</h4>
      <h3>About Me</h3>

      <div className="about__container">
        {/* <div className='about__media'>
          <div className='about__image'>
            <img className='aboutimg' src={picture2} alt='About img'/>
          </div>
        </div> */}
        <div className="aboutmyself">
          <p>
            As an experienced software engineer with three years of practical
            know-how, I am currently pursuing a graduate degree in Computer
            Science at Indiana University Bloomington. My passion lies in web
            development and data analysis, where I strive to explore new
            technologies that enhance the user experience, make interfaces
            seamless, and derive insights from data.
          </p>
          <br />
          <p>
            With a strong software engineering background and a keen interest in
            data analysis, I'm dedicated to delivering high-quality solutions,
            driving innovation, and using data to make informed decisions. By
            combining my expertise in development and analysis, I aim to create
            impactful solutions that integrate both disciplines and provide
            valuable insights to drive business success.
          </p>
          <br />
          <p>
            I believe in the harmony between art and technology. Outside of
            work, I enjoy exploring different art forms like Zentangle and
            Geometric art. These creative outlets inspire me to approach
            projects with a fresh perspective and find innovative solutions.
          </p>
          <br />
          <p>
            Thank you for gracing my website with your presence, and I eagerly
            anticipate crossing paths with you soon.
          </p>
          {/* <p className='initial'> - Chandana </p> */}
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="aboutcard">
              <MdInterests className="about__icon" />
              <h4>Leisurely Obsessions</h4>
              <small>Zentangle and Geometric art</small>
              <br />
              <a
                href="https://www.instagram.com/artchived101/"
                className="btn showbutton"
                target="_blank"
                rel="noreferrer"
              >
                Take a peek
              </a>
            </article>

            <article className="aboutcard">
              <TbBrandVsco className="about__icon" />
              <h4>Curious Pursuits</h4>
              <small>Aesthetic Photography</small>
              <br />
              <a
                href="https://vsco.co/chandanachakilam/gallery"
                className="btn showbutton"
                target="_blank"
                rel="noreferrer"
              >
                Check it out
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
