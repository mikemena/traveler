import React from 'react';
import './WorkWithMe.css';
import githubIconUrl from '../assets/github.svg';
import upworkIconUrl from '../assets/upwork.svg';

const UnderConstructionPage = () => {
  const navbarLinks = [{ title: 'Go Back To The Beach', url: '/' }];

  return (
    <div className="under-construction-container">
      <div className="content">
        <h1>Lets work on something together!</h1>

        <div className="work-with-me__contact-container">
          <h2>Reach me through Upwork</h2>
          <a
            href="https://www.upwork.com/freelancers/~0156a711a4df4dddff?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~0156a711a4df4dddff%2Fprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <img className="icon" src={upworkIconUrl} alt="GitHub Icon" />
          </a>
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
                <a className="work-with-me__link" href={link.url}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
