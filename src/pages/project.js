import React from 'react';
import Ttt from "../images/ttt.png";
import Pokemon from "../images/pokemon.png";
import Drumpad from "../images/drumpad.png";
import Couscous from "../images/couscous.png";


export default function Project() {
  return (
    <div className='grid-item' id='#projects'>

        <h1 className='projTitle'>Projects</h1>

        <div class="projectContainer">
          <div className='projectBox'>
            <img class="data" src={ Ttt } alt="tictactoe project"/>
            <h3>Tic-tac-toe</h3>
            <p>Stack: JavaScript, HTML & CSS.</p>
            <div className="links">
              <a class="button primary" href="https://leopengilley.github.io/tictactoe/" target="_blank">
                Play
              </a>
              <a class="button" href="https://github.com/leopengilley/tictactoe" target="_blank">
                GitHub
              </a>
            </div>
          </div>

          <div className='projectBox'>
            <img class="data" src={ Drumpad } alt="drumpad project"/>
            <h3>PLT-Drum-9</h3>
            <p>Stack: React, Ruby on Rails, HTML & CSS.</p>
            <div className="links">
              <a class= "button primary" href="https://plt-drum-9.herokuapp.com/" target="_blank">
                Play
              </a>
              <a class= "button" href="https://github.com/trentthom/dm" target="_blank">
                GitHub
              </a>
            </div>
          </div>

          <div className='projectBox'>
            <img class="data" src={ Couscous } alt="game project"/>
            <h3>Glowing Couscous</h3>
            <p>Stack: Phaser, JavaScript, HTML & CSS.</p>
            <div className="links">
              <a class= "button primary" href="https://leopengilley.github.io/glowing-couscous/" target="_blank">
                Play
              </a>
              <a class= "button" href="https://github.com/leopengilley/glowing-couscous" target="_blank">
                GitHub
              </a>
            </div>
          </div>

          <div className='projectBox'>
            <img class="data" src={ Pokemon } alt="pokemon project"/>
            <h3>Pokedex</h3>
            <p>Stack: Javascript, Ruby on Rails, HTML & CSS.</p>
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
  )
}
