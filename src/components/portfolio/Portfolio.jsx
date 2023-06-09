import React from 'react'
import './portfolio.css'
import lifepred from '../../assets/Picture1.png'
import crimson from '../../assets/CrimsonBoard.png'
import paper1 from '../../assets/Hamster.png'
import paper2 from '../../assets/Paper2.png'
import paper3 from '../../assets/Paper3.png'

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
          <a href='https://drive.google.com/file/d/1MDKJ6Sfl7JpR_6RZt51TwprtZrkYlFaP/view?usp=drive_link' className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={paper3} alt='Life Expectancy Prediction Model'/> 
          </div>
          <h3> Social media's take on climate change using topic modelling </h3>
          <div className="actionbtn">
            <a href='https://github.com/Chakilamchandana/Social-Media-about-Climate-Change' className='btn' target='_blank'>GitHub</a>
            <a href='https://github.com/Chakilamchandana/Social-Media-about-Climate-Change/tree/main/Supplemental' className='btn btn-primary' target='_blank'>Data</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={paper1} alt='Life Expectancy Prediction Model'/> 
          </div>
          <h3>Identifying spam comments on Instagram using Content Analysis </h3>
          <div className="actionbtn">
            <a href='https://github.com/Chakilamchandana/Identifying-Spam-Comments' className='btn' target='_blank'>GitHub</a>
            <a href='https://github.com/Chakilamchandana/Identifying-Spam-Comments/tree/main/Supplemental_Paper1' className='btn btn-primary' target='_blank'>Data</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={lifepred} alt='Life Expectancy Prediction Model'/> 
          </div>
          <h3>Life Expectancy Prediction Model </h3>
          <div className="actionbtn">
            <a href='https://github.com/Chakilamchandana/Life-Expectancy-Prediction/tree/main/project-schakil-ltaduru-main' className='btn' target='_blank'>GitHub</a>
            <a href='https://docs.google.com/presentation/d/e/2PACX-1vQUO1IbdSrAyBY0P3Zcbt6p0ZSnwsgmN1bUpkSaOV1HpcY7rd_0h0HYAG5UHvyHlw/pub?start=false&loop=false&delayms=5000' className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={paper2} alt='Life Expectancy Prediction Model'/> 
          </div>
          <h3> The study of recession using text classification </h3>
          <div className="actionbtn">
            <a href='https://github.com/Chakilamchandana/Effects-of-Recession' className='btn' target='_blank'>GitHub</a>
            <a href='https://github.com/Chakilamchandana/Effects-of-Recession/tree/main/Supplemental' className='btn btn-primary' target='_blank'>Data</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Portfolio