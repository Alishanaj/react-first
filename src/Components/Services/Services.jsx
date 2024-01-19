import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './Services.css'
const Services = () => {
  return (
  <section id="experience">
<h5>What skills i have</h5>
<h2>My Experience</h2>

<div className="container container_experience">

<div className="experience_frontend">

<h3>Frontend Development</h3>
<div className="experience__content">
 
<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>HTML</h4>
<small className='text-light'>Experienced</small>
</article>

<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>CSS</h4>
<small className='text-light'>Experienced</small>
</article>

<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>JAVASCRIPT</h4>
<small className='text-light'>Intermediate</small>
</article>

<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>BOOTSTRAP</h4>
<small className='text-light'>Intermediate</small>
</article>

<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>ANGULAR</h4>
<small className='text-light'>Beginner</small>
</article>

<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>REACT</h4>
<small className='text-light'>Beginner</small>
</article>

<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>SHOPIFY</h4>
<small className='text-light'>Experienced</small>
</article>

<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>Wordpress</h4>
<small className='text-light'>Beginner</small>
</article>

</div>

</div>

{/* END OF FRONTEND */}

<div className="experience_backend">
<h3>Backend Development</h3>
<div className="experience__content">

<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>PHP</h4>
<small className='text-light'>Intermediate</small>
</article>

<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>LARAVEL</h4>
<small className='text-light'>Beginner</small>
</article>

<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>MYSQL</h4>
<small className='text-light'>Intermediate</small>
</article>

<article className='experience_details'>
<BsPatchCheckFill className='experience__details-icon'/> 
<h4>NODE JS</h4>
<small className='text-light'>Beginner</small>
</article>


</div>

</div>


</div>



  </section>
  )
}

export default Services