import React from 'react';

import Helmet from "react-helmet";
import { withPrefix, Link } from "gatsby";

import Github from "../images/github.jpg";
import Linkedin from "../images/linkedin.jpg";
import Email from "../images/email.jpg";

export default function About() {
  return (
    <div className='grid-item' id='#about'>
      <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
      </Helmet>
      <div className='aboutDiv'>
        <div className='photo'></div>
        <div className='aboutDescription'>
          <h1>Hi, I'm Lio.</h1>
          <p>
            I'm a Junior Software Engineer with a passion for creating and building
            meaningful products. My 6 years experience in the hospitality industry
            has equipped me with wide-ranging skills including working under pressure,
            within large teams, and creating products with the user experience in mind.
          </p>
          <div class="socialBox">
            <a class="socials" href="https://github.com/leopengilley" target="_blank">
              <img class="icon" src={ Github } alt="github link"/>
            </a>
            <a class="socials" href="https://www.linkedin.com/in/liopengilley/" target="_blank">
              <img class="icon" src={ Linkedin } alt="linkedin link"/>
            </a>
            <button class="buttonEmail socials">
              <img class="icon emailButton" src={ Email } alt="email link"/>
              <span class="emailAlert">
                Email copied to clipboard!
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
