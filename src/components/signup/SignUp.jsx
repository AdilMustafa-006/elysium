import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import "./style.css"

import Sidebar from '../../pages/sidebar/Sidebar'

function SignUp() {
  return (
    <div className='signup-container'>
      <Container fluid>
        <Row>
          <Col sm={12} md={4} lg={3} className='sidebar-wrapper'>
            <Sidebar />
          </Col>
          <Col sm={12} md={8} lg={9}>
            <div className='signup-form-section'>
              <p className='have-account-text'> Already have an account? </p>
              <Link to="/" className='have-account-link'>
                <button className='signin-nav-btn'
                > Sign In</button>
              </Link>
            </div>
            <div className='signup-form-container'>
              <SignUpForm/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignUp