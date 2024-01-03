import React from 'react'
import ME from '../../assets/second.png'
import { FaAward, FaHome,FaUser} from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <>
    <div className="top-space"></div>
    <section id="about">
    <h5>Get to Know</h5>
    <h2>About me</h2>
 <div className="container about__container">
<div className="about__me">
<div className="about__me-image">
<img src={ME} alt="" />
</div>

</div>

<div className="about__content">
<div className="about__cards">
<article className='about__card'>
   <FaHome className='about__icon'/>
   <h5>Experience</h5>
   <span>2+ years</span>
</article>
<article className='about__card'>
   <FaUser className='about__icon'/>
   <h5>Clients</h5>
   <span>10+ Clients</span>
</article>

<article className='about__card'>
   <FaAward className='about__icon'/>
   <h5>Projects</h5>
   <span>10+ Projects</span>
</article>


</div>

<p>Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Voluptate, consequatur
    modi asperiores quibusdam unde id soluta,
     eligendi error libero beatae ut doloribus minus!
      Voluptates commodi tenetur quis harum, exercitationem laudantium.

</p>

<a href="#contact" className='btn btn-primary'>Talk To Me</a>



</div>
 </div>

    </section>
    <div className="bottom-space"></div>
    </>
  )
}

export default About
