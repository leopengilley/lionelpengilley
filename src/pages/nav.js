import React from 'react';
import { Link } from 'react-scroll';

export default function Nav() {
  return (
      <div class="menu">
        <div class="navbar">
          <div class="title">
            <Link to="#home" smooth duration={1000}>
              <div className='navItems'>
                {'Lionel Pengilley'}
              </div>
            </Link>
          </div>

          <div class="groupedNav">
            <Link to="#about" smooth duration={1000}>
              <div className='navItems'>
                {'About'}
              </div>
            </Link>

            <Link to="#projects" smooth duration={1000}>
              <div className='navItems'>
                {'Projects'}
              </div>
            </Link>

            <Link to="#contact" smooth duration={1000}>
              <div className='navItems'>
                {'Contact'}
                </div>
            </Link>
          </div>
        </div>
      </div>

  )
}
