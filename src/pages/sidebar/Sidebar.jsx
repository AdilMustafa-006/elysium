import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css"
import logo from '../../assets/images/logo.png'


function Sidebar() {
  return (
    <div className='sidenav-container'>
      <img className='sidenav-image' src={logo} alt='elysium img' />
      <span className='sidenav-text'> © {new Date().getFullYear()}{" "} Elysium. All rights reserved.</span>
    </div>
  )
}

export default Sidebar