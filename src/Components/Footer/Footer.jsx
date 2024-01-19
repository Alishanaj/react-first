import React from "react";
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';




const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
        My Portfolio
      </a>
      {/* style={{marginRight: spacing + 'em'}} */}
      <ul className="permalinks"   >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
    <a href="www.facebook.com"><FaFacebookF/></a>
    <a href="www.instagram.com"><FiInstagram/></a>
    <a href="www.twitter.com"><IoLogoTwitter/></a>

      </div>

      <div className="footer_copyright">

        <small>&copy; Alishan portfolio. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
