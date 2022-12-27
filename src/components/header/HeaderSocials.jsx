import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

function HeaderSocials() {
  return (
    // eslint-disable-next-line
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/izhal29/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Izhal-Brown" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://dribbble.com/Izhal29" target="_blank" rel="noreferrer"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials