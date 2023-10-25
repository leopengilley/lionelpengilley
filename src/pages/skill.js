import React from 'react';
import Aws from "../images/amazonaws.svg";
import Css from "../images/css3-color.svg";
import Django from "../images/django.svg";
import Git from "../images/git-color.svg";
import Js from "../images/javascript-color.svg";
import Linux from "../images/linux.svg";
import Mysql from "../images/mysql-color.svg";
import Postgres from "../images/postgresql-color.svg";
import Python from "../images/python-color.svg";
import Rails from "../images/rubyonrails-color.svg";
import Reactlogo from "../images/react-color.svg";
import Html5 from "../images/html5-color.svg";


export default function Skill() {
  return (
    <div className='grid-item' id='#skills'>

        <div className='projTitle'>
          <h1>Skills</h1>
        </div>

        <div className="projectContainer">
          <img class="skillsLogo" src={ Aws } alt="skills logo"/>
          <img class="skillsLogo" src={ Linux } alt="skills logo"/>
          <img class="skillsLogo" src={ Python } alt="skills logo"/>
          <img class="skillsLogo" src={ Django } alt="skills logo"/>
          <img class="skillsLogo" src={ Mysql } alt="skills logo"/>
          <img class="skillsLogo" src={ Postgres } alt="skills logo"/>
          <img class="skillsLogo" src={ Git } alt="skills logo"/>
          <img class="skillsLogo" src={ Css } alt="skills logo"/>
          <img class="skillsLogo" src={ Html5 } alt="skills logo"/>
          <img class="skillsLogo" src={ Js } alt="skills logo"/>
          <img class="skillsLogo" src={ Rails } alt="skills logo"/>
          <img class="skillsLogo" src={ Reactlogo } alt="skills logo"/>
        </div>
    </div>
  )
}
