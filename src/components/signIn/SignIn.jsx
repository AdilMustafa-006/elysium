import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css"

import Sidebar from '../../pages/sidebar/Sidebar'

function SignIn() {
  return (
    <div className='signin-container'>
      <Container fluid>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignIn