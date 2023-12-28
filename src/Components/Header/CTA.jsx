import React from 'react'
import cv from '../../assets/Alishan 2021 new updated cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={cv} download className='btn'> DOWNLOAD CV </a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default CTA