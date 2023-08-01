import React, { useEffect, useState } from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import './header.css'
import Action from './Action'
import myimage from '../../assets/Subject 4.png'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {

  const [text] = useTypewriter({
    words: ['a Student...', 'a Full-Stack Developer...', 'a Data analyst'],
    loop:{},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
   <header>
      <div className="container header__container">
        <h3>Hello there! I'm</h3>
        <h1>Srichandana Chakilam</h1>
        <h2> I'm {' '}
        <span className='typetext'>
          {text}
        </span>
        <span>
          <Cursor/>
        </span>
        </h2>
        <Action/>
        <HeaderSocials/>
        <div className='me'>
            <img className = 'headerimg' src={myimage} alt=''/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down </a>

      </div>
   
   </header>
  )
}

export default Header