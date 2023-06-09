import React from 'react'
import './portfolio.css'
import lifepred from '../../assets/Picture1.png'
import crimson from '../../assets/CrimsonBoard.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h3>The projects</h3>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={crimson} alt='Crimson Board LMS'/>  
          </div>
          <h3>Crimson Board - The Learning Management System</h3>
          <div className="actionbtn">
          <a href='https://github.com/Chakilamchandana/django_lms' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/Chakilamchandana/django_lms/tree/main/demo' className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={lifepred} alt='Life Expectancy Prediction Model'/> 
          </div>
          <h3>Life Expectancy Prediction Model </h3>
          <div className="actionbtn">
            <a href='https://github.com/Chakilamchandana/Life-Expectancy-Prediction/tree/main/project-schakil-ltaduru-main' className='btn' target='_blank'>GitHub</a>
            <a href='https://github.com/Chakilamchandana/Life-Expectancy-Prediction/blob/main/project-schakil-ltaduru-main/VID-20221204-WA0037.mp4' className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio