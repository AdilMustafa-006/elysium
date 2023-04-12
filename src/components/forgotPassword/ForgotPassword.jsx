import React from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { SC } from '../../services/forgotPassword'
import { useFormik } from "formik";
import { forgotPasswordSchema } from '../../utils/forgotPasswordValidation'


// import { Link } from 'react-router-dom';
import "./style.css"

import Sidebar from '../../pages/sidebar/Sidebar'

function ForgotPassword() {

  const initialValues = {
    email: "",
  };

  const { values, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: forgotPasswordSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        SC.forgotPassword(values)
        // console.log('values', values)
        action.resetForm();
      },
    });
  return (
    <div className=''>
      <Container fluid>
        <Row>
          <Col sm={12} md={4} lg={3} className='sidebar-wrapper'>
            <Sidebar />
          </Col>
          <Col sm={12} md={8} lg={9}>
            <div className='d-flex justify-content-center align-items-center vh-100'>
              <Card className='mx-auto forgot-pwd-card'>
                <Card.Body>
                  <Card.Title className='forgot-pwd-title'>Forgot Password ?</Card.Title>
                  <Card.Text>
                    Enter the email to which your account is assigned and we will send a verification code.
                  </Card.Text>
                  <Form onSubmit={handleSubmit}>

                  
                  <Form.Group  className='mb-2'>
                    <Form.Control
                      placeholder="Email"
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange} />

                    {errors.email && touched.email &&
                      <div className="forgot-password-field-error p-1">
                        {errors.email}
                      </div>
                    }
                  </Form.Group>

                  <Button variant="dark" className='send-code-btn' type='submit'>Send Code</Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ForgotPassword