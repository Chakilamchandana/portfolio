import React from 'react'
import './about.css' 
import picture2 from '../../assets/picture3.JPG'
import {MdInterests} from 'react-icons/md'
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs'
import {TbBrandVsco} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h4>Get to know more</h4>
      <h3>About Me</h3>

      <div className='container about__container'>
        <div className='about__media'>
          <div className='about__image'>
            <img src={picture2} alt='About img'/>
          </div>
        </div>
        
        <div className='about__content'>
        
        <div className='about__cards'>
          <article className='aboutcard'>
              <BsFillFileEarmarkCodeFill className='about__icon'/>
                <h4>
                  My IT Journey
                </h4>
                <small>3 years as a Software Engineer</small>
                <a href="#experience" class="btn" target='_self'>Dive in</a>
              </article>

            <article className='aboutcard'>
              <MdInterests className='about__icon'/>
                <h4>
                  Leisurely Obsessions
                </h4>
                <small>Zentangle and Geometric art</small>
                <a href="https://www.instagram.com/artchived101/" class="btn" target='_blank'>Take a peek</a>
            </article>

            <article className='aboutcard'>
              <TbBrandVsco className='about__icon'/>
                <h4>
                  Curious Pursuits
                </h4>
                <small>Aesthetic Photography</small>
                <a href="https://vsco.co/chandanachakilam/gallery" class="btn" target='_blank'>Check it out</a>
            </article>   
          </div>
        <p>As an experienced software engineer with three years of practical know-how, I'm currently pursuing a 
        graduate degree in Computer Science at Indiana University Bloomington. My focus and passion lie in web development, 
        with a strong drive to explore new technologies that enhance the user experience and make interfaces seamless.
        </p>
        <p>
        I'm excited to apply my technical skills and personal strengths to make a meaningful contribution to potential 
        employers. With a solid background in software engineering and a commitment to staying up-to-date with industry 
        trends, I'm dedicated to delivering high-quality solutions and driving innovation.
        </p>   
        <p>Thank you for gracing my website with your presence, and I eagerly anticipate crossing paths with you soon.</p>
        </div>
      </div>

    </section>
  )
}

export default About