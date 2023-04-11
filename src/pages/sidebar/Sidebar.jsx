import React from 'react'
import "./style.css"
import logo from '../../assets/images/logo.png'

function Sidebar() {
  return (
    <div className='sidenav-container'>
      <div className='sidenav-image'>
        <img className='img-holder' src={logo} alt='elysium img' />
      </div>
      <div className='sidenav-text'> © {new Date().getFullYear()}{" "} Elysium. All rights reserved.</div>
    </div>
  )
}

export default Sidebar