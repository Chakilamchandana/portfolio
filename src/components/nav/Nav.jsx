import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {BiPhone} from 'react-icons/bi'
import {TbBrandVsco} from 'react-icons/tb'
import {BiBook} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {

  const [activeLink, setactiveLink] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setactiveLink('#')} className= { activeLink === '#' ? 'active': '' }><BiHome/></a>
      <a href='#about' onClick={() => setactiveLink('#about')} className={ activeLink === '#about' ? 'active': ''}><BiUserCircle/></a>
      <a href='#experience' onClick={() => setactiveLink('#experience')} className={ activeLink === '#experience' ? 'active': ''}><BiBook/></a>
      <a href='#portfolio' onClick={() => setactiveLink('#portfolio')} className={activeLink === '#portfolio' ? 'active': ''}><TbBrandVsco/></a>
      <a href='#contact' onClick={() => setactiveLink('#contact')} className={activeLink === '#contact' ? 'active': ''}><BiPhone/></a>
    </nav>
  )
}

export default Nav