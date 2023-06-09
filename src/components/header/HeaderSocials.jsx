import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsWordpress} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
            <a href='https://www.linkedin.com/in/chandana-chakilam-488837146/' target='_blank'><BsLinkedin/></a>
            <a href='https://wordpress.com/view/readithere142929319.wordpress.com' target='_blank'><BsWordpress/></a>
            <a href='https://github.com/Chakilamchandana' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials