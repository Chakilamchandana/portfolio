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
      "Handled website updates, implementing changes across IU Eskenazi School's 3 sites, yielding a 25% increase in content accuracy and functionality.",
      "Provided technical support across Salesforce Marketing Cloud and MachForm/Fireforms, achieving a 20% improvement in operational efficiency.",
      "Supervised website performance, maintaining 99% compliance with established protocols, and promptly addressed issues to enhance the user experience",
    ],
    tenure: "December 2023 - Present",
  },
  {
    imageData: uits,
    role: "UITS - Technology Center Consulting",
    org: "Indiana University - Bloomington",
    resp: [
      "Resolved technical issues for clients of the Student Technology Centers efficiently, addressing software and hardware problems achieving a 40% increase in overall client satisfaction.",
      "Assisted clients with various computing platforms, like Windows,macOS, iOS, Android, contributing to a 98% service level agreement (SLA) and supporting more than 100 clients per week.",
    ],
    tenure: "August 2023 - Present",
  },
  {
    imageData: acc,
    role: "Application Development Analyst",
    org: "Accenture Solutions Private Limited",
    resp: [
      "Collaborated with Microsoft, configuring 100+ advanced reports using SQL in SSMS for the Modern Analytics and Insights portal to extract crucial insights on client engagements, projects,labor hours, and revenue.",
      "Enhanced company web applications by displaying user-access requests for MAI portal using React.js and Node.js, optimizing functionality and user experience.",
      "Efficiently supported the created web pages managing access requests for reports and Power BI dashboards, tailored to specific user roles within Microsoft and its contractors.",
      "Managed an SQL database, regulating user roles and access rights for a user base exceeding 1000, ensuring data security with no breaches.",
      "Defined solution requirements through platforms such as ServiceNow, SSMS, and Microsoft Power BI, resulting in a 20% reduction in recurring incidents, streamlining operations.",
      "Implemented Role-based Access Control (RBAC) for Microsoft Power BI dashboards and reports using Python and SQL, resulting in a 30% decrease in reported incidents.",
    ],
    tenure: "June 2019 - June 2022",
  },
  {
    imageData: fountane,
    role: "Software Developer Intern",
    org: "Fountane Makerspace Private Limited",
    resp: [
      "Coded 23 visually appealing, user-friendly, responsive UI pages for the organization, employing web development technologies and frameworks such as Bootstrap, JavaScript, HTML, and CSS.",
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
    skillset: [
      "Python",
      "JavaScript",
      "Java",
      "SQL",
      "HTML5",
      "CSS3",
      "MongoDB",
    ],
  },
  {
    id: 2,
    type: "Frameworks",
    skillset: ["NodeJS + ExpressJS", "ReactJS", "Bootstrap", "Django"],
  },
  {
    id: 3,
    type: "Version controls, Tools, and Programs",
    skillset: [
      "Git",
      "Jira",
      "Docker",
      "SSMS",
      "Microsoft Power BI",
      "Cascade WCMS",
      "ServiceNow",
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
