import React from 'react';
import Ttt from "../images/ttt.png";
import Pokemon from "../images/pokemon.gif";
import Drumpad from "../images/drumpad.png";
import Couscous from "../images/couscous.png";


export default function Project() {
  return (
    <div className='grid-item' id='#projects'>

        <div className='projectBox' id='projectBoxStart'>
          <h1 className='projTitle'>Projects</h1>
        </div>

          <div className='projectBox'>
            <div className='projectPic'>
              <a href="https://leopengilley.github.io/tictactoe/" target="_parent">
                <img src={ Ttt } alt="tictactoe project"/>
              </a>
            </div>
            <div className='projectDescription'>
              <h3>Tic-tac-toe the game</h3>
              <p>Tech stack: HTML, CSS and JavaScript.</p>
            </div>
            <div className="links">
              <a href="https://leopengilley.github.io/tictactoe/" target="_parent">
                Play
              </a>
              <a href="https://github.com/leopengilley/tictactoe" target="_parent">
                GitHub
              </a>
            </div>
          </div>

          <div className='projectBox'>
            <div className='projectPic'>
              <a href="https://stark-reaches-80757.herokuapp.com/" target="_parent">
                <img src={ Pokemon } alt="pokemon project"/>
              </a>
            </div>
            <div className='projectDescription'>
              <h3>Pokemon Pokedex</h3>
              <p>Tech stack: Javascript, Ruby on Rails, HTML and CSS.</p>
            </div>
            <div className="links">
              <a href="https://stark-reaches-80757.herokuapp.com/" target="_parent">
                Play
              </a>
              <a href="https://github.com/leopengilley/potential-octo-adventure" target="_parent">
                GitHub
              </a>
            </div>
          </div>

          <div className='projectBox'>
            <div className='projectPic'>
              <a href="https://plt-drum-9.herokuapp.com/" target="_parent">
                <img src={ Drumpad } alt="drumpad project"/>
              </a>
            </div>
            <div className='projectDescription'>
              <h3>PLT-Drum-9</h3>
              <p>Tech stack: React.js, jQuery, JavaScript, Ruby on Rails, HTML and CSS.</p>
            </div>
            <div className="links">
              <a href="https://leopengilley.github.io/glowing-couscous/" target="_parent">
                Play
              </a>
              <a href="https://github.com/leopengilley/glowing-couscous" target="_parent">
                GitHub
              </a>
            </div>

          </div>

          <div className='projectBox'>
            <div className='projectPic'>
              <a href="https://leopengilley.github.io/glowing-couscous/" target="_parent">
                <img src={ Couscous } alt="game project"/>
              </a>
            </div>

            <div className='projectDescription'>
              <h3>Glowing Couscous</h3>
              <p>Tech stack: Phaser.js, JavaScript, Node.js, HTML and CSS.</p>
            </div>
            <div className="links">
              <a href="https://leopengilley.github.io/glowing-couscous/" target="_parent">
                Play
              </a>
              <a href="https://github.com/leopengilley/glowing-couscous" target="_parent">
                GitHub
              </a>
            </div>
          </div>
    </div>
  )
}