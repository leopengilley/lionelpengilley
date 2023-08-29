import React from 'react';
import Github from "../images/github.jpg";
import Linkedin from "../images/linkedin.jpg";
import Email from "../images/email.jpg";

export default function Title() {
  return (
    <div className='grid-item landingPage' id='#home'>
      <div className='landing'>
        <h1 class="name">About me</h1>
      </div>
      <div className='aboutDiv'>
        <div className='photo'></div>
        <div className='aboutDescription'>
          <h1>Hi, I'm Lio.</h1>
          <p>
            I am a passionate and dedicated individual with a strong foundation
            in web development and cloud technologies. My journey through roles
            at FDM Group and General Assembly has not only equipped me with
            technical expertise but also highlighted my commitment to excellence
            and collaborative problem-solving. 
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
