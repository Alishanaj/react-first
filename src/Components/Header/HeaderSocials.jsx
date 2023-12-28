import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="www.linkedin.com" ><FaLinkedin /></a>
        <a href="www.github.io" target='_blank'><FaGithub /></a>
        <a href="www.facebook.com" target='_blank'><FaFacebook /></a>

    </div>
  )
}

export default HeaderSocials