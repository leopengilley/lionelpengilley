import React from 'react';
import Ttt from "../images/ttt.png";
import Pokemon from "../images/pokemon.png";
import Drumpad from "../images/drumpad.png";
import Couscous from "../images/couscous.png";


export default function Project() {
  return (
    <div className='grid-item' id='#projects'>

        <div className='projectBoxStart'>
          <h1 className='projTitle'>Projects</h1>
        </div>

        <div class="projectContainer">
          <div className='projectBox'>
            <img src={ Ttt } alt="tictactoe project"/>
            <div class='projectContent'>
              <div className='projectDescription'>
                <h3>Tic-tac-toe</h3>
                <p>Stack: JavaScript, HTML & CSS.</p>
              </div>
              <div className="links">
                <a class="button primary" href="https://leopengilley.github.io/tictactoe/" target="_blank">
                Play
                </a>
                <a class="button" href="https://github.com/leopengilley/tictactoe" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className='projectBox'>
            <img src={ Drumpad } alt="drumpad project"/>
            <div class='projectContent'>
              <div className='projectDescription'>
                <h3>PLT-Drum-9</h3>
                <p>Stack: React, Ruby on Rails, HTML & CSS.</p>
              </div>
              <div className="links">
                <a class= "button primary" href="https://plt-drum-9.herokuapp.com/" target="_blank">
                  Play
                </a>
                <a class= "button" href="https://github.com/trentthom/dm" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className='projectBox'>
            <img src={ Couscous } alt="game project"/>
            <div class='projectContent'>
              <div className='projectDescription'>
                <h3>Glowing Couscous</h3>
                <p>Stack: Phaser, JavaScript, HTML & CSS.</p>
              </div>
              <div className="links">
                <a class= "button primary" href="https://leopengilley.github.io/glowing-couscous/" target="_blank">
                  Play
                </a>
                <a class= "button" href="https://github.com/leopengilley/glowing-couscous" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className='projectBox'>
            <div className='projectPic'>
              <img src={ Pokemon } alt="pokemon project"/>
            </div>
            <div class='projectContent'>
              <div className='projectDescription'>
                <h3>Pokedex</h3>
                <p>Stack: Javascript, Ruby on Rails, HTML & CSS.</p>
              </div>
              <div className="links">
                <a class= "button primary" href="https://stark-reaches-80757.herokuapp.com/" target="_blank">
                  Play
                </a>
                <a class= "button" href="https://github.com/leopengilley/potential-octo-adventure" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
