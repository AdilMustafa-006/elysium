import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./style.css"

import Sidebar from '../../pages/sidebar/Sidebar'
import SignInForm from './SignInForm';

function SignIn() {
  return (
    <div className='signin-container'>
      <Container fluid>
        <Row>
        <Col sm={12} md={4} lg={3}>
            <Sidebar />
          </Col>
          <Col sm={12} md={8} lg={9}>
            <div className='signin-form-section'>
              <p className='have-account-text'> Don't have an account? </p>
              <Button className='create-account-btn'
                onClick={() => { console.log('create account----------') }}> Create an account</Button>

            </div>
            <div className='signin-form-container'>
              <SignInForm/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignIn