import React from 'react';
import Github from "../images/github.jpg";
import Linkedin from "../images/linkedin.jpg";
import Email from "../images/email.png";


export default function Contact() {
  return (
    <div className='grid-item' id='#contact'>
      <h1>Contact Me</h1>
      <div class="social">
        <img class="icon" src={ Github } alt="github link"/>
        <img class="icon" src={ Linkedin } alt="linkedin link"/>
        <img class="icon" src={ Email } alt="email link"/>
      </div>
    </div>
  )
}
