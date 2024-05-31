import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import eskenazi from "../../assets/eskenazi.jpeg";
import uits from "../../assets/uits.png";
import acc from "../../assets/accenture.png";
import fountane from "../../assets/fountane_logo.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import { Accordion } from "react-bootstrap";

const experienceData = [
  {
    imageData: eskenazi,
    role: "Web Development Intern",
    org: "Indiana University - Eskenazi School of Art, Architecture + Design",
    resp: [
      "Updated School’s websites using HTML, and JavaScript on Cascade CMS, boosting content accuracy by 85%.",
      "Ensured ADA compliance and accessibility for over 1000 documents using Adobe Creative Suite across 3 websites.",
      "Revamped legacy JavaScript code on the school’s internal website using the modern JavaScript library ReactJS, leading to enhanced performance and user experience.",
      "Boosted code reusability by 40% through the development of 50+ ReactJS reusable components, empowering staff in managing forms, employee records, and documents.",
      "Collaborated in configuring and managing 20+ RESTful API endpoints using NodeJS, ExpressJS, and MySQL on Azure for seamless data operations, and administrative tasks on the internal website, catering to 50 employees.",
      "Developed a Power BI dashboard using Siteimprove scores, understanding customer interactivity and identifying areas for a 15% improvement in website accessibility across websites.",
    ],
    tenure: "December 2023 - Present",
  },
  {
    imageData: uits,
    role: "Technology Center Consulting",
    org: "Indiana University UITS - Bloomington",
    resp: [
      "Resolved software and web-related issues for clients of the Student Technology Centers, contributing to a 40% increase in overall client satisfaction and supporting more than 100 clients weekly.",
      "Assisted clients with various computing platforms, like Windows,macOS, iOS, Android, contributing to a 98% service level agreement (SLA) and supporting more than 100 clients per week.",
      "Conducted hardware diagnostics and troubleshooting during walk-in support sessions, swiftly resolving technical issues and providing recommendations for system optimization and maintenance.",
      "Trained junior team members, enhancing their technical skills and improving the overall efficiency of the support team.",
    ],
    tenure: "August 2023 - Present",
  },
  {
    imageData: acc,
    role: "Application Development Analyst",
    org: "Accenture Solutions Private Limited",
    resp: [
      "Configured and deployed 100+ advanced Power BI dashboards and Excel reports, leveraging DAX and SQL queries to manage Microsoft’s projects, labor hours, and revenue data stored in SSRS within Azure Data Cloud.",
      "Reduced reported incidents on ServiceNow by 30% by performing extensive data analysis using SQL queries in SSMS.",
      "Collaborated with cross-functional teams to configure and develop RESTful APIs for real-time backend data updates using Java and Spring Boot, seamlessly integrated with live Power BI dashboards.",
      "Defined solution requirements through platforms such as ServiceNow, SSMS, and Microsoft Power BI, resulting in a 20% reduction in recurring incidents, streamlining operations.",
      "Optimized Development processes with Test-Driven Development using JUnit and Postman, reducing bugs by 20% and enhancing application stability.",
    ],
    tenure: "June 2019 - June 2022",
  },
  {
    imageData: fountane,
    role: "Software Developer Intern",
    org: "Fountane Makerspace Private Limited",
    resp: [
      "Designed 23 visually appealing, user-friendly, responsive UI pages for the organization, employing web development technologies and frameworks such as Bootstrap, JavaScript, HTML, and CSS.",
      "Integrated custom responsive UI components and conducted optimization efforts on designed web pages, achieving 30% improvement in user experience.",
      "Composed and edited content for the organization, ensuring accuracy, clarity, and adherence to brand guidelines.",
    ],
    tenure: "April 2018 – June 2018",
  },
];

const skillData = [
  {
    id: 1,
    type: "Programming, and Database Languages",
    skillset: ["Python", "Java", "C", "SQL", "DAX"],
  },
  {
    id: 2,
    type: "Web Technlogies",
    skillset: ["JavaScript", "HTML5", "CSS3", "PHP"],
  },
  {
    id: 3,
    type: "Frameworks and Libraries",
    skillset: [
      "NodeJS",
      "ExpressJS (REST API)",
      "ReactJS",
      "Spring (Framework & Boot)",
      "Hibernate",
      "jQuery",
      "Bootstrap",
      "Django",
      "MongoDB",
      "Jest",
      "JUnit",
    ],
  },
  {
    id: 4,
    type: "Software Methodologies and OS",
    skillset: ["Agile", "Scrum", "Jira", "Kanban", "Windows", "Linux", "MacOS"],
  },
  {
    id: 5,
    type: "Version controls, Tools, Programs",
    skillset: [
      "Git",
      "Visual Studio",
      "Postman",
      "Docker",
      "IntelliJ",
      "Eclipse IDE",
      "SSMS",
      "Microsoft Power BI",
      "Cascade WCMS",
      "WordPress",
      "ServiceNow",
      "Adobe Creative Suite",
      "Google Analytics",
    ],
  },
  {
    id: 6,
    type: "Cloud Technologies",
    skillset: ["AWS", "Microsoft Azure (DevOps)"],
  },
  {
    id: 7,
    type: "Certifications",
    skillset: [
      "Microsoft Certified - Azure Data Fundamentals",
      "Udemy Certified - Microsoft Power BI Desktop",
      "Udemy Certified - The Ultimate React 2024 ",
      "Udemy Certified - The Complete Web Development Bootcamp 2023",
    ],
  },
];

const Experience = () => {
  const responsibilities = experienceData;
  const skills = skillData;
  return (
    <>
      <section id="experience">
        <h4>My Professional Journey</h4>
        <h3>The Corporate Experience</h3>
        <div className="experience_container">
          {responsibilities.map((responsibility, index) => (
            <ExperienceContent
              experienceObj={responsibility}
              key={index}
              index={index}
            />
          ))}
        </div>
      </section>
      <section id="skills">
        <h3>The Skill Set</h3>
        <div className="skill_container">
          {skills.map((skill, index) => (
            <SkillsContent skillObj={skill} key={index} index={index} />
          ))}
        </div>
      </section>
    </>
  );
};

const SkillsContent = (props) => {
  return (
    <div className="skillContent">
      <div className="skillType">
        <h3 className="skillTypeName">{props.skillObj.type}</h3>
        <ul className="skillList">
          {props.skillObj.skillset.map((skill, index) => (
            <li className="skillDetails">
              <BsPatchCheckFill className="skills_icon" />
              <div className="skillset" key={index}>
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceContent = (props) => {
  // const { index } = props;
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="headerDetails">
            <div className="roleName"> {props.experienceObj.role} </div>
            <div className="tenure"> {props.experienceObj.tenure}</div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="accordionBody">
          <div className="imgOrg">
            <img
              className="orgImage"
              src={props.experienceObj.imageData}
              alt={props.experienceObj.role}
            />

            <div className="orgName">{props.experienceObj.org}</div>
          </div>

          <ul className="responsibilities">
            {props.experienceObj.resp.map((responsibility, index) => (
              <div className="contentDetails">
                <FaAward className="slidericon" />
                <li className="respPoints" key={index}>
                  {responsibility}
                </li>
              </div>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Experience;
