import React from 'react'
import Resume from '../../assets/Srichandana Chakilam Resume.pdf'

const Action = () => {
  return (
    <div className='action'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default Action