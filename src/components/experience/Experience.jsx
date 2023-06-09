import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaAward} from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

const Experience = () => {
  return (
    <section id='experience'>
      <h4>My Professional Journey</h4>
      <h3>The Corporate Experience</h3>
      <Swiper
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
            Maintained and managed Microsoft business reports encompassing clients' engagements, projects, 
            labor hours, revenue, and other relevant data.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Created MS Power BI dashboards that displayed key business KPIs, allowing FTEs and managers to track
             project payrolls and revenues, saving 10 hours per week on manual reporting.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Supported clients by addressing their issues and providing solution requirements using platforms 
            such as ServiceNow, SQL Server Management Studio (SSMS), and Microsoft Power BI to reduce the incoming incidents by 20%.
            </li>
            <FaAward className='slidericon'/>
            <li className='sliderpoint'>
            Collaborated in maintaining a comprehensive knowledge base of articles to document and share solutions for future reference.
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
      </Swiper>



      <h3>The Skill Set</h3>

      <div className="container container__experience">
        <div className="container__frontend">
          <h3>Frontend Technologies and Frameworks</h3>
          <div className="experience__content">
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
                <h4>React and JSX</h4>
                <small className='text-light'>Experienced</small>
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
        <h3>Data visualization and Analytics</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Microsoft Power BI</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>
          </div> 
        </div>
      </div>

    </section>

  )
}

export default Experience