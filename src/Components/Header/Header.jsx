import React from 'react'
import './Header.css'
import me from '../../assets/first.jpg'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
// style={{marginRight: spacing + 'em'}} 

const Header = () => {

    
  return (
    <>
    <header>
      <div className="container header__container">

      <h5>Hello I'm</h5>
    <h1>Alishan Jessani</h1>
    <h5 className='text-light'>Frontend Developer</h5>
    <CTA/>
   
    <HeaderSocials/>
    <div className="me">
      <img src={me} alt="" className='me-img'  />
    </div>
   

    <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
      
    



    </header>
    </>
  )
}

export default Header