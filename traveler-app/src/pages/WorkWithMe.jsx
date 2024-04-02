import React from 'react';
import { NavLink } from 'react-router-dom';
import './WorkWithMe.css';
import githubIconUrl from '../assets/github.svg';
import emailIconUrl from '../assets/startmail.svg';

const UnderConstructionPage = () => {
  const navbarLinks = [{ title: 'Go Back To The Beach', url: '/' }];

  return (
    <div className="under-construction-container">
      <div className="content">
        <h1>Lets work on something together!</h1>

        <div className="work-with-me__contact-container">
          <h2>Send me an email</h2>
          <NavLink to="/contact" rel="noopener noreferrer" className="nav-link">
            <img className="icon" src={emailIconUrl} alt="Email Icon" />
          </NavLink>
        </div>

        <div className="work-with-me__contact-container">
          <h2>Check out my GitHub Page to see my work</h2>
          <a
            href="https://github.com/mikemena"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <img className="icon" src={githubIconUrl} alt="GitHub Icon" />
          </a>
        </div>
        <nav>
          <ul>
            {navbarLinks.map((link, index) => (
              <li key={index}>
                <NavLink className="work-with-me__link" to={link.url}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
