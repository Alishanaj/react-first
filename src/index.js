import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import About from './About/About';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

let heading='hello yes world'
let item1="item1"
let item2="item2"
let item3="item3"
let curdate=new Date().toLocaleDateString();
let curdatee=new Date().toLocaleTimeString();
let firstinlinestyle={
    backgroundColor:'blue',
    fontSize:'22px',
    padding:'50px'

}
ReactDOM.render(



<>
    <Header/>
    <Nav/>
    <About/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>


</>

,document.getElementById("root"));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

