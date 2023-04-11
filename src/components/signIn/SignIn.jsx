import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css"

import Sidebar from '../../pages/sidebar/Sidebar'
import SignInForm from './SignInForm';

function SignIn() {
  return (
    <div className='signin-container'>
      <Container fluid>
        <Row>
          <Col sm={12} md={4} lg={3} className='sidebar-wrapper'>
            <Sidebar />
          </Col>
          <Col sm={12} md={8} lg={9}>
            <div className='signin-form-section'>
              <p className='have-account-text'> Don't have an account? </p>
              <Link to="/signup" className='have-account-link'>
                <button className='create-account-btn'
                > Create an account</button>
              </Link>
            </div>
            <div className='signin-form-container'>
              <SignInForm />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignIn