import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import { BsGithub } from "react-icons/bs";
import { RiLiveFill } from "react-icons/ri";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "The Cafe Shop",
    github: "https://github.com/Izhal-Brown/mern-client",
    demo: "https://mern-client-one.vercel.app/",
  },
  {
    id: 1,
    image: IMG2,
    title: "Calculator",
    github: "https://github.com/Izhal-Brown/Calculator_ReactJS",
    demo: "https://calculator-react-js-eta.vercel.app/",
  },
  {
    id: 1,
    image: IMG3,
    title: "Landing Page Coffe",
    github: "https://github.com/Izhal-Brown/coffe",
    demo: "https://izhal-brown.github.io/coffe/",
  },
  {
    id: 1,
    image: IMG4,
    title: "Todo List",
    github: "https://github.com/Izhal-Brown/todolist-reactjs",
    demo: "https://todolist-reactjs-ten.vercel.app/",
  },
  {
    id: 1,
    image: IMG5,
    title: "CRUD Products",
    github: "https://github.com/Izhal-Brown/crud-expressjs",
    demo: "https://frontend-crud-mongoose.vercel.app/",
  },
  {
    id: 1,
    image: IMG6,
    title: "API News",
    github: "https://github.com/Izhal-Brown/api-reactjs",
    demo: "https://api-reactjs-three.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  <BsGithub className="portfolio__icons" /> Github
                </a>
                {/* eslint-disable-next-line */}
                <a href={demo} className="btn btn-primary" target="_blank">
                  <RiLiveFill className="portfolio__icons" />
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
