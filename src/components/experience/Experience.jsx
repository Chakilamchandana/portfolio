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
    role: "Web Support Intern",
    org: "Indiana University - Eskenazi School of Art, Architecture + Design",
    resp: [
      "Executed website updates using HTML, CSS, JavaScript, and PHP, implementing changes across IU Eskenazi School's 3 sites, published using Hannon Hill’s Cascade CMS, yielding a 25% increase in content accuracy and functionality.",
      "Amplified accessibility for the school’s 3 websites and more than 100 documents using Adobe Creative Suite, ensuring 100% compliance with Indiana University's ADA Policy UA-02 and WCAG 2.0.",
      "Achieved a 20% reduction in issue resolution time by streamlining technical support across Salesforce Marketing Cloud and MachForm/Fireforms.",
      "Directed website performance leveraging Google Analytics within the CMS, maintaining a 99% compliance rate with established protocols, and proactively addressing web-related issues to enhance the user experience.",
    ],
    tenure: "December 2023 - Present",
  },
  {
    imageData: uits,
    role: "Technology Center Consulting",
    org: "Indiana University UITS - Bloomington",
    resp: [
      "Resolved technical issues for clients of the Student Technology Centers efficiently, addressing software and hardware problems achieving a 40% increase in overall client satisfaction.",
      "Assisted clients with various computing platforms, like Windows,macOS, iOS, Android, contributing to a 98% service level agreement (SLA) and supporting more than 100 clients per week.",
      "Maintained network connections for campus housing residents, guaranteeing reliable connectivity to the university network for a student population of more than 10000.",
    ],
    tenure: "August 2023 - Present",
  },
  {
    imageData: acc,
    role: "Application Development Analyst",
    org: "Accenture Solutions Private Limited",
    resp: [
      "Collaborated with Microsoft, configuring 100+ advanced reports using SQL in SSMS, PowerBI and Excel for the Modern Analytics and Insights portal extracting crucial insights on client engagements, projects,labor hours, and revenue.",
      "Developed and maintained an internal web application using ReactJS and NodeJS that displays user access requests for the MAI Portal, thereby optimizing functionality and enhancing the overall user experience.",
      "Decreased reported incidents on ServiceNow by 30% by deploying Role-based Access Control (RBAC) for Microsoft Power BI dashboards and reports using SQL.",
      "Defined solution requirements through platforms such as ServiceNow, SSMS, and Microsoft Power BI, resulting in a 20% reduction in recurring incidents, streamlining operations.",
      "Redesigned an SQL database, regulating user roles and access rights for a user base exceeding 1000, ensuring data security with no breaches.",
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
    skillset: ["Python", "JavaScript", "Java", "SQL", "HTML5", "CSS3", "PHP"],
  },
  {
    id: 2,
    type: "Frameworks and Libraries",
    skillset: [
      "NodeJS",
      "ExpressJS (REST API)",
      "ReactJS",
      "Bootstrap",
      "Django",
      "Spring Boot",
      "Spring MVC",
      "MongoDB",
    ],
  },
  {
    id: 3,
    type: "Version controls, Tools, Programs, and Methodologies",
    skillset: [
      "Git",
      "Visual Studio",
      "Jira",
      "Docker",
      "SSMS",
      "Microsoft Power BI",
      "Cascade WCMS",
      "WordPress",
      "ServiceNow",
      "CI/CD (DevOps)",
      "Agile",
      "Adobe Creative Suite",
      "Google Analytics",
    ],
  },
  {
    id: 4,
    type: "Cloud Technologies",
    skillset: ["Amazon EC2", "Microsoft Azure"],
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
