import React from 'react';
import "./layout.css"

export default function Layout (props) {
  return (
    <div className='container'>
      { props.children }
    </div>
  )
}
