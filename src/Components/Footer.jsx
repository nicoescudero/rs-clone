import React from 'react'
import Logo from '../Assets/rockstar.svg'
import { FaTwitch, FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="about-footer">
        <img src={ Logo } alt="" />
        <div className="options-footer">
          <button className='option-footer'>CONTACT</button>
          <button className='option-footer'>ABOUT</button>
          <button className='option-footer'>SUPPORT</button>
          <button className='option-footer'>SUBSCRIBE</button>
        </div>
      </div>
      <div className="social-media">
        <FaTwitch className='social-icon-footer'/>
        <FaInstagram className='social-icon-footer'/>
        <FaTwitter className='social-icon-footer'/>
        <FaYoutube className='social-icon-footer'/>
        <FaFacebook className='social-icon-footer'/>
      </div>
    </footer>
  )
}

export default Footer