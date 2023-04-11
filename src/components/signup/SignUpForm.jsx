import React, { useState } from 'react';
import { Form, FormControl, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';

import { useFormik } from "formik";
import { signUpSchema } from '../../utils/signUpValidation'


function SignUpForm() {

  const [showPassword, setShowPassword] = useState(false);
  const [pwdLenght, setPwdLenght] = useState(false)
  const [pwdLowercase, setPwdLowercase] = useState(false)
  const [pwdUppercase, setPwdUppercase] = useState(false)
  const [pwdhaveNum, setHaveNum] = useState(false)
  const [pwdSpeicalChar, setPwdSpeicalChar] = useState(false)

  const initialValues = {
    firstName: '',
    lastName: '',
    companyName: '',
    dbServer: '',
    dbTable: '',
    email: '',
    password: '',
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
  
      onSubmit: (values, action) => {
        // console.log('values', values)
        action.resetForm();
        setShowPassword(false)
      },
    });


  const handleChangepwd = (event) => {
    handleChange(event)
    const { value, name } = event.target;
    if (name === 'password') {
  
      if (!value) {
        // Reset all state variables when password field is empty
        setPwdLenght(false);
        setPwdLowercase(false);
        setPwdUppercase(false);
        setHaveNum(false);
        setPwdSpeicalChar(false);
      } 
    
      else {
        // Perform other validation checks
        const uppercaseRegex = /^(?=.*[A-Z])/;
        const lowercaseRegex = /^(?=.*[a-z])/;
        const specialCharRegex = /^(?=.*[!@#$?|><}{%^&*])/;
        const atLeastOneNumber = /^(?=.*\d)/;
    
        if (uppercaseRegex.test(value)) {
          setPwdUppercase(true);
        } else {
          setPwdUppercase(false);
        }
    
        if (lowercaseRegex.test(value)) {
          setPwdLowercase(true);
        } else {
          setPwdLowercase(false);
        }
    
        if (specialCharRegex.test(value)) {
          setPwdSpeicalChar(true);
        } else {
          setPwdSpeicalChar(false);
        }
    
        if (atLeastOneNumber.test(value)) {
          setHaveNum(true);
        } else {
          setHaveNum(false);
        }
        if (value.length >= 8) {
          setPwdLenght(true);
        } else {
          setPwdLenght(false);
        }
      
      }
    }
    
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="d-flex flex-column  mt-2">
        <Row>
          <h6 className='singup-title'> Create an account</h6>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="firstName" className='m-2 signup-filed'>

              <Form.Control
                type="text"
                className='signup-name-filed'
                name='firstName'
                placeholder=" First name"
                value={values.firstName}
                onChange={handleChange}
              // onBlur={handleBlur}
              />
            </Form.Group>
            {errors.firstName && touched.firstName &&
              <div className="mt-1 mx-2 p-1 error-text" >
                {errors.firstName}
              </div>
            }
          </Col>
          <Col>
            <Form.Group controlId="lastName" className='m-2 signup-filed'>
              <Form.Control
                type="text"
                className='signup-name-filed'
                placeholder="Last name"
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
              // onBlur={handleBlur}
              />
            </Form.Group>
            {errors.lastName && touched.lastName &&
              <div className="mt-1 mx-2 p-1 error-text" >
                {errors.lastName}
              </div>
            }
          </Col>
        </Row>


        <Form.Group controlId="email" className='m-2'>

          <Form.Control
            type="email"
            placeholder="Email"
            className='signup-field'
            name='email'
            value={values.email}
            onChange={handleChange}
          // onBlur={handleBlur}
          />
        </Form.Group>
        {errors.email && touched.email &&
          <div className="mt-1 mx-2 p-1 error-text">
            {errors.email}
          </div>
        }

        <Form.Group controlId="companyName" className='m-2'>

          <Form.Control
            type="text"
            className='signup-field'
            placeholder="Company name"
            name='companyName'
            value={values.companyName}
            onChange={handleChange}
          // onBlur={handleBlur}
          />
        </Form.Group>
        {errors.companyName && touched.companyName &&
          <div className="mt-1 mx-2 p-1 error-text">
            {errors.companyName}
          </div>
        }

        <Row>
          <Col sm={12} md={8} lg={6}>
            <Form.Group controlId="dbserver" className='m-2 signup-filed' >
              <Form.Select
                value={values.dbServer}
                className='signup-dropdown-field'
                name='dbServer'
                onChange={handleChange}
              // onBlur={handleBlur}
              >
                <option >Number of Db servers</option>
                <option value="1-2">1-2</option>
                <option value="2-4">2-4</option>
                <option value="4-6">4-6</option>
              </Form.Select>
            </Form.Group>
            {errors.dbServer && touched.dbServer &&
              <div className="mt-1 mx-2 p-1 error-text">
                {errors.dbServer}
              </div>
            }
          </Col>

          <Col sm={12} md={8} lg={6}>
            <Form.Group controlId="dbtables" className='m-2 signup-filed'>

              <Form.Select aria-label="No of Db Tables"
                className='signup-dropdown-field'
                name='dbTable'
                value={values.dbTable}
                onChange={handleChange}
              // onBlur={handleBlur}
              >
                <option value=''>Number of Db Tables</option>
                <option value="1-5">1-5</option>
                <option value="5-10">5-10</option>
                <option value="10-15">10-15</option>
              </Form.Select>
            </Form.Group>
            {errors.dbTable && touched.dbTable &&
              <div className="mt-1 mx-2 p-1 error-text">
                {errors.dbTable}
              </div>
            }
          </Col>
        </Row>

        <Form.Group controlId="password" className='m-2'>
          <InputGroup className='signup-pwd-field'>
            <FormControl
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name='password'
              value={values.password}
              className='pwd-field-bg'
              onChange={handleChangepwd}
            // onBlur={handleBlur}
            />
            <InputGroup.Text onClick={toggleShowPassword} className="pwd-field-bg"
            >
              <span style={{ color: '#6c757d' }}>
                {showPassword ? "Hide" : "Show"}
              </span>
              &nbsp; &nbsp;
              <span>
                {showPassword ? <FaEyeSlash className='pwd-field-bg' /> : <FaEye className='pwd-field-bg' />}
              </span>
            </InputGroup.Text>

          </InputGroup>
        </Form.Group>
        {errors.password && touched.password &&
          <>

            <div className="mt-1 mx-2 p-1">
              <Row>
                <Col>
                  {pwdLenght ? <CiCircleCheck className='pwd-error-icon' /> : <CiCircleRemove style={{ color: 'red' }} />}
                  <span className={pwdLenght ? ' succuss-text' : 'error-text'}> 8 charcters minimum </span>
                </Col>

                <Col>
                  {pwdLowercase ? <CiCircleCheck className='pwd-error-icon' /> : <CiCircleRemove style={{ color: 'red' }} />}
                  <span className={pwdLowercase ? ' succuss-text' : 'error-text'}> One lowercase letter</span>
                </Col>

              </Row>
              <Row>
                <Col>
                  {pwdUppercase ? <CiCircleCheck className='pwd-error-icon' /> : <CiCircleRemove style={{ color: 'red' }} />}
                  <span className={pwdUppercase ? ' succuss-text' : 'error-text'}> One uppercase charcter</span>
                </Col>
                <Col>
                  {pwdhaveNum ? <CiCircleCheck className='pwd-error-icon' /> : <CiCircleRemove style={{ color: 'red' }} />}
                  <span className={pwdhaveNum ? ' succuss-text' : 'error-text'}> One number </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  {pwdSpeicalChar ? <CiCircleCheck className='pwd-error-icon' /> : <CiCircleRemove style={{ color: 'red' }} />}
                  <span className={pwdSpeicalChar ? ' succuss-text' : 'error-text'}> One special charcter</span>
                </Col>
              </Row>
            </div>
          </>
        }

        <Button className='mt-2 signup-btn' type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  )
}

export default SignUpForm