import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <div className="ui container">
      <div className="ui large secondary inverted pointing menu">
        <a className="toc item">
          <i className="sidebar icon"></i>
        </a>
        <a className="active item">Home</a>
        <a className="item">Work</a>
        <a className="item">Company</a>
        <a className="item">Careers</a>
        <div className="right item">
          <a className="ui inverted button">Log in</a>
          <a className="ui inverted button">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default Menu
