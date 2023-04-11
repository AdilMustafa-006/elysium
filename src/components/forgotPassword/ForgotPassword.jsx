import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import "./style.css"

import Sidebar from '../../pages/sidebar/Sidebar'

function ForgotPassword() {
  return (
    <div className=''>
      <Container fluid>
        <Row>
          <Col sm={12} md={4} lg={3} className='sidebar-wrapper'>
            <Sidebar />
          </Col>
          <Col sm={12} md={8} lg={9}>
            <div className=''>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ForgotPassword