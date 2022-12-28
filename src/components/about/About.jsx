import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* eslint-disable-next-line */}
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>BootCamp</h5>
              <small>Codingstudio</small><br />
              <small>Eduwork</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>1 Completed</small>
            </article>
          </div>
          <p>
            I have some expertise in Administration, IT Suport, Networking, Frontend Developer, Backend Developer, UI/UX and Graphic Design. My current abilities allow me to develop and adapt in any environment.
          </p>
          {/* <p>
            Saya memiliki beberapa keahlian dibidang Administrasi, IT Suport, Networking, Frontend Developer, Backend Developer, UI/UX dan Design Grafis. Kemampuan saya saat ini membuat saya berkembang dan beradaptasi di lingkungan manapun.
          </p> */}
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About