import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from "formik";
import { signInSchema } from '../../utils/signinValidation'


function SignInForm() {

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log('values', values)
        action.resetForm();
      },
    });

  return (
    <div>
      <h6 className='signin-title'> Sign in to Elysium</h6>
      <Form onSubmit={handleSubmit}>
        
        <Form.Group className='signin-field-box'>
          <div className="signin-field-container">
            <Form.Control
              className="signin-field"
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email &&
              <div className="signin-field-error">
                {errors.email}
              </div>
            }
          </div>
          <div className="signin-field-container">
            <Form.Control
              className="signin-field"
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password &&
              <div className="signin-field-error">
                {errors.password}
              </div>
            }
          </div>
        </Form.Group>

        <Form.Group className="remember-me-sec" controlId="formBasicCheckbox">
          <Form.Check type="checkbox"
           className='signin-checkbox'
            label="Stay logged in" 
            id="rememberMe"
            name="rememberMe"
            checked={values.rememberMe}
            onChange={handleChange}
            />
          <p className='forgot-pwd-btn'>
            Forget password?
          </p>
        </Form.Group>
        <Button variant="primary" className='signin-btn' type="submit">
          Sign In
        </Button>
      </Form>


    </div>
  )
}

export default SignInForm

