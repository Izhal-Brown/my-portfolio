import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
// import IMG2 from '../../assets/portfolio2.jpg';
// import IMG3 from '../../assets/portfolio3.jpg';
// import IMG4 from '../../assets/portfolio4.jpg';
// import IMG5 from '../../assets/portfolio5.png';
// import IMG6 from '../../assets/portfolio6.jpg';
import { BsGithub } from 'react-icons/bs'
import { RiLiveFill } from 'react-icons/ri'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'The Cafe Shop',
    github: 'https://github.com/Izhal-Brown/mern-client',
    demo: 'https://mern-client-one.vercel.app/'
  },
  // {
  //   id:1,
  //   image: IMG2,
  //   title: 'Charts template & infographics in Figma',
  //   github: 'https://github.com/Izhal-brown',
  //   demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // },
  // {
  //   id:1,
  //   image: IMG3,
  //   title: 'Figma dashboard UI kit for data design web apps',
  //   github: 'https://github.com/Izhal-brown',
  //   demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  // },
  // {
  //   id:1,
  //   image: IMG4,
  //   title: 'Maintaining tasks and tracking progress',
  //   github: 'https://github.com/Izhal-brown',
  //   demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  // },
  // {
  //   id:1,
  //   image: IMG5,
  //   title: 'Charts template & infigraphics in Figma',
  //   github: 'https://github.com/Izhal-brown',
  //   demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // },
  // {
  //   id:1,
  //   image: IMG6,
  //   title: 'Charts templates & infigraphics in Figma',
  //   github: 'https://github.com/Izhal-brown',
  //   demo: 'https://dribbble.com/shots/15888765-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'><BsGithub className='portfolio__icons'/> Github</a>
                  {/* eslint-disable-next-line */}
                  <a href={demo} className='btn btn-primary' target='_blank'><RiLiveFill className='portfolio__icons' />Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio