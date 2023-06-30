import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaAward} from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

const Experience = () => {
  return (
    <section id='experience'>
      <h4>My Professional Journey</h4>
      <h3>The Corporate Experience</h3>

      {/* <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <h3 className='sliderheader'>Application Development Analyst
            <small> Accenture Solutions Pvt Ltd</small>
            </h3>
      
            <ul className='slidercontent'>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Developed and maintained Microsoft business reports encompassing clients' engagements, projects, 
            labor hours, revenue, and other relevant data.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Utilized Python's pandas library, Microsoft SQL Server Connector (pyodbc), and Power Query to perform efficient data 
            ingestion, ETL processes, and reporting.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Implemented Role-based Access Control (RBAC) for Power BI dashboards and reports using Python and SQL ensuring appropriate user 
            access and permissions based on their roles.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Built a comprehensive PowerBI dashboard using data from CSAT and DSAT scores, providing clear insights into customer 
            satisfaction levels, areas of improvement, and performance trends.
            </li>
            </ul>
          </div>
        </SwiperSlide>

      
        <SwiperSlide>
        <div>
            <h3 className='sliderheader'>Associate Software Engineer
            <small> Accenture Solutions Pvt Ltd</small>
            </h3>
      
            <ul className='slidercontent'>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Successfully completed rigorous training in various technical areas including Object-Oriented programming in 
            Java, Database Management Systems, SQL Programming, Data Structures, HTML, CSS, and ASP.net MVC Architecture.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Utilized acquired knowledge and skills to provide technical support to Microsoft users, troubleshooting and 
            resolving issues related to network and platform performance.
            </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
            <h3 className='sliderheader'>Software Developer Intern
            <br/><small> Fountane Makerspace Pvt Ltd</small>
            </h3>
      
            <ul className='slidercontent'>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Developed visually appealing and user-friendly landing pages for the organization using web development technologies 
            and frameworks using HTML, CSS, Bootstrap and JavaScript.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Composed and edited content for the organization, ensuring accuracy, clarity, and adherence to brand guidelines.
            </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper> */}

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <h3 className='sliderheader'>Application Development Analyst<br/>
            <small> Accenture Solutions Pvt Ltd</small>
            </h3>
      
            <ul className='slidercontent'>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Developed and maintained Microsoft business reports encompassing clients' engagements, projects, 
            labor hours, revenue, and other relevant data.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Utilized Python's pandas library, Microsoft SQL Server Connector (pyodbc), and Power Query to perform efficient data 
            ingestion, ETL processes, and reporting.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Implemented Role-based Access Control (RBAC) for Power BI dashboards and reports using Python and SQL ensuring appropriate user 
            access and permissions based on their roles.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Built a comprehensive PowerBI dashboard using data from CSAT and DSAT scores, providing clear insights into customer 
            satisfaction levels, areas of improvement, and performance trends.
            </li>
            </ul>
          </div>
        </SwiperSlide>

      
        <SwiperSlide>
        <div>
            <h3 className='sliderheader'>Associate Software Engineer<br/>
            <small> Accenture Solutions Pvt Ltd</small>
            </h3>
      
            <ul className='slidercontent'>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Provided solution requirements using platforms such as ServiceNow, SSMS, and Microsoft Power BI to reduce the 
            incoming incidents by 20%.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Utilized SQL stored procedures to efficiently backtrack and resolve user issues pertaining to access permissions 
            for reports and dashboards.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Using complex SQL queries identified and rectified inconsistencies in labor and revenue data within engagements, 
            ensuring data accuracy and integrity.
            </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
            <h3 className='sliderheader'>Software Developer Intern
            <br/><small> Fountane Makerspace Pvt Ltd</small>
            </h3>
      
            <ul className='slidercontent'>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Developed visually appealing and user-friendly landing pages for the organization using web development technologies 
            and frameworks using HTML, CSS, Bootstrap and JavaScript.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Implemented interactive elements and optimized the landing pages for improved user experience.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Composed and edited content for the organization, ensuring accuracy, clarity, and adherence to brand guidelines.
            </li> 
            </ul>
          </div>
        </SwiperSlide>
        
      </Swiper>
    



      <h3>The Skill Set</h3>

      <div className="container container__experience">
        <div className="container__frontend">
          <h3>Frontend Technologies and Frameworks</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            
          </div>
        </div>

        <div className="container__backend">
        <h3>Backend Technologies and Frameworks</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>   
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Node JS and Express</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Django</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
          </div>
        </div>

        <div className="container__dataviz">
        <h3>Data visualization and Analytics, Version Controls, and Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>MS Power BI</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>GitHub</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Docker</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div> 
        </div>
      </div>

    </section>

  )
}

export default Experience