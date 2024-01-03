import React, { useState } from 'react'
import './Nav.css'
import { FaBook, FaHome, FaPhone, FaUser, FaEnvelope, FaLocationArrow, FaCalendar } from 'react-icons/fa'




const Nav = () => {

  const[activeNav,setActiveNav] =  useState("#");
  return (
    <>
    <div className="top-spacee"></div>
    
      <nav>
      <a href="#" onClick={  () => setActiveNav("#")  }  className={activeNav==="#" ? 'active' : '' }><FaHome /></a>
    <a href="#about" onClick={  () => setActiveNav("#about")  }  className={activeNav==="#about" ? 'active' : '' }> <FaUser/></a>
    <a href="#experience" onClick={  () => setActiveNav("#experience")  }  className={activeNav==="#experience" ? 'active' : '' }><FaBook/></a>
    <a href="#service" onClick={  () => setActiveNav("#service")  }  className={activeNav==="#service" ? 'active' : '' }><FaEnvelope/></a>
    <a href="#portfolio" onClick={  () => setActiveNav("#portfolio")  }  className={activeNav==="#portfolio" ? 'active' : '' }><FaLocationArrow/></a>
    <a href="#contact" onClick={  () => setActiveNav("#contact")  }  className={activeNav==="#contact" ? 'active' : '' }><FaCalendar/></a>
    <a href="#footer" onClick={  () => setActiveNav("#footer")  }  className={activeNav==="#footer" ? 'active' : '' }><FaPhone/></a>
    </nav>
    
    <div className="bottom-spacee"></div>
    </>
  )
}

export default Nav