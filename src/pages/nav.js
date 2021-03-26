import React from 'react';
import { Link } from 'react-scroll';

export default function Nav() {
  return (
      <nav>
        <Link to="#home" smooth duration={1000}>
          <div className='navItems' id="title">
            {'Lionel Pengilley'}
          </div>
        </Link>

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
      </nav>

  )
}
