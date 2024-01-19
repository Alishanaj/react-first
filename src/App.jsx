import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Experience from './Components/Experience/Experience'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
</>

  )
}

export default App