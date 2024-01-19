import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/diners.webp'
import img2 from '../../assets/white.webp'
import img3 from '../../assets/diners.webp'
import img4 from '../../assets/fourth portofoilo.jpg'
import img5 from '../../assets/fifth portfolio.jpg'
import img6 from '../../assets/six portfolio.jpg'

const data = [

 { id:1,
  image:img1,
  title:'Ui one',
  github:'https://github.com/',
  demo:'https://dribbble.com/Alien_pixels'
 },
 {
  id:2,
  image:img2,
  title:'Ui one',
  github:'https://github.com/',
  demo:'https://dribbble.com/Alien_pixels'
 },
 {
  id:3,
  image:img3,
  title:'Ui one',
  github:'https://github.com/',
  demo:'https://dribbble.com/Alien_pixels',
 },
 {
  id:4,
  image:img4,
  title:'Ui one',
  github:'https://github.com/',
  demo:'https://dribbble.com/Alien_pixels'
 },
 {
  id:5,
  image:img5,
  title:'Ui one',
  github:'https://github.com/',
  demo:'https://dribbble.com/Alien_pixels',
 },
 {
  id:6,
  image:img6,
  title:'Ui one',
  github:'https://github.com/',
  demo:'https://dribbble.com/Alien_pixels'
 }
]
  
const Portfolio = () => {





  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    {/* parent div */}
    <div className="container portfolio__container">  
    {
      data.map( (item) => {
        return(
        <article className="portfolio__item" key={item.id}>
          <div className="portfolio-item-image">
          <img src={item.image} alt=""  className={`common-class ${item.id === 3 ? 'specific-class-true' : 'specific-class-false'}`} />
          </div>
          <h3>{item.title}</h3>
          <div className="portfolio__item__cta">
          <a href={item.github} className='btn'>Github</a>
          <a href={item.demo} className='btn btn-primary' >Live demo</a>

          </div>  
      
        </article>
        )
      }
      )
}



</div>



    </section>
  )
}

export default Portfolio