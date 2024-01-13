import React from "react";
import "./portfolio.css";
import lifepred from "../../assets/Picture1.png";
import crimson from "../../assets/CrimsonBoard.png";
import paper1 from "../../assets/Hamster.png";
import paper2 from "../../assets/Paper2.png";
import paper3 from "../../assets/Paper3.png";
import logo from "../../assets/logo.png";
import todo from "../../assets/todo.jpeg";
import jobsearch from "../../assets/jobsearch.jpeg";
import cocktail from "../../assets/background.avif";
import slicer from "../../assets/slicer.jpeg";

const projectData = [
  {
    name: "Crimson Board | The Learning Management System",
    image: crimson,
    git: "https://github.com/Chakilamchandana/django_lms",
    external:
      "https://drive.google.com/file/d/1MDKJ6Sfl7JpR_6RZt51TwprtZrkYlFaP/view",
  },
  {
    name: "Jot Box | A note-taking system",
    image: logo,
    git: "https://github.com/Chakilamchandana/jotbox",
    external: "https://jotbox.netlify.app/",
  },
  {
    name: "EZ Job searcher | A Job Aggregator",
    image: jobsearch,
    git: "https://github.com/Chakilamchandana/jobsearcher",
    external: "https://recent-job-searcher.onrender.com/",
  },
  {
    name: "To Do | A note-taking system",
    image: todo,
    git: "https://github.com/Chakilamchandana/todoapp",
    external: "https://t0d0listapp.netlify.app/",
  },

  {
    name: "Cocktail Generator | Using External API",
    image: cocktail,
    git: "https://github.com/Chakilamchandana/Cocktail-Generator",
    external: "https://cocktail-generator-app.onrender.com/",
  },

  {
    name: "Life Expectancy Prediction Model | A prediction model using regression",
    image: lifepred,
    git: "https://github.com/Chakilamchandana/Life-Expectancy-Prediction/tree/main/project-schakil-ltaduru-main",
    external:
      "https://docs.google.com/presentation/d/e/2PACX-1vQUO1IbdSrAyBY0P3Zcbt6p0ZSnwsgmN1bUpkSaOV1HpcY7rd_0h0HYAG5UHvyHlw/pub?start=false&loop=false&delayms=5000",
  },

  {
    name: "Social Media's Take on Climate Change | A paper utilizing Topic Modelling ",
    image: paper3,
    git: "https://github.com/Chakilamchandana/Social-Media-about-Climate-Change",
    external:
      "https://github.com/Chakilamchandana/Social-Media-about-Climate-Change/tree/main/Supplemental",
  },

  {
    name: "Identifying Spam Comments under Instagram Posts | A paper utilizing Content Analysis",
    image: paper1,
    git: "https://github.com/Chakilamchandana/Identifying-Spam-Comments",
    external:
      "https://github.com/Chakilamchandana/Identifying-Spam-Comments/tree/main/Supplemental_Paper1",
  },

  {
    name: "The Study of Recession | A paper utilizing Text Classification",
    image: paper2,
    git: "https://github.com/Chakilamchandana/Effects-of-Recession",
    external:
      "https://github.com/Chakilamchandana/Effects-of-Recession/tree/main/Supplemental",
  },
  {
    name: "SliceMate | The Bill Slicing Companion",
    image: slicer,
    git: "https://github.com/Chakilamchandana/django_lms",
    external:
      "https://drive.google.com/file/d/1MDKJ6Sfl7JpR_6RZt51TwprtZrkYlFaP/view",
  },
];

//       {/* <a href='/' className='viewbtn'>View All Projects</a> */}

const Portfolio = () => {
  const projects = projectData;
  return (
    <section id="portfolio">
      <h4>My Notable Work</h4>
      <h3>The projects</h3>
      <div className=" portfolio__container">
        <>
          {projects.map((project) => (
            <Project projectObj={project} key={project.name} />
          ))}
        </>
      </div>
    </section>
  );
};

const Project = (props) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={props.projectObj.image} alt={props.projectObj.name} />
      </div>
      <h3 className="projName">{props.projectObj.name}</h3>
      <div className="actionbtn">
        <a
          href={props.projectObj.git}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={props.projectObj.external}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
    </article>
  );
};

export default Portfolio;
