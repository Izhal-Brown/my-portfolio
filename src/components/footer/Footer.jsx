import React from 'react';
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      {/*  eslint-disable-next-line */}
      <a href="#" className='footer__logo'>Izhal</a>
      <ul className="permalinks">
        {/*  eslint-disable-next-line */}
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        {/* eslint-disable-next-line */}
        <a href="https://www.facebook.com/Izhal29/" target="_blank"><FaFacebookF/></a>
        {/* eslint-disable-next-line */}
        <a href="https://www.instagram.com/izhal_brown/" target="_blank"><FiInstagram/></a>
        {/* eslint-disable-next-line */}
        <a href="https://twitter.com" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Izhal. All Rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer