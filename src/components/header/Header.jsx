import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';
import TypeWriter from 'typewriter-effect'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Muh. Rizhal Ridwan</h1>
        <h3 className="text-light">
          <TypeWriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ["Fullstack Developer", "Frontend","Backend","Design Graphic"]
            }}
          />
        </h3>
        <CTA/>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="My foto" />
        </div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header