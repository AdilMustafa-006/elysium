import React, { useState } from 'react';
import { Form, FormControl, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [dbServer, setDbServer] = useState('');
  const [dbTable, setDbTable] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    console.log('data----', firstName, lastName, companyName, password, dbServer, dbTable)
    e.preventDefault();
    // handle form submission
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
                placeholder=" First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName" className='m-2 signup-filed'>
              <Form.Control
                type="text"
                className='signup-name-filed'
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>


        <Form.Group controlId="email" className='m-2'>

          <Form.Control
            type="email"
            placeholder="Email"
            className='signup-field'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="companyName" className='m-2'>

          <Form.Control
            type="text"
            className='signup-field'
            placeholder="Company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="dbserver" className='m-2 signup-filed' >
              <Form.Select
                value={dbServer}
                className='signup-name-filed'
                onChange={(e) => setDbServer(e.target.value)}
              >
                <option >No of Db servers</option>
                <option value="1-2">1-2</option>
                <option value="2-4">2-4</option>
                <option value="4-6">4-6</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="dbtables" className='m-2 signup-filed'>

              <Form.Select aria-label="No of Db Tables"
                className='signup-name-filed'
                value={dbTable}
                onChange={(e) => setDbTable(e.target.value)}
              >
                <option>No of Db Tables</option>
                <option value="1-5">1-5</option>
                <option value="5-10">5-10</option>
                <option value="10-15">10-15</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="password" className='m-2'>
          <InputGroup className='signup-field'>
            <FormControl
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className='pwd-field-bg '
            />
            <InputGroup.Text onClick={toggleShowPassword} className="pwd-field-bg">
              <span>
                {showPassword ? "Hide" : "Show"}
              </span>
              &nbsp;
              <span>
                {showPassword ? <FaEyeSlash className='pwd-field-bg ' /> : <FaEye className='pwd-field-bg ' />}
              </span>
            </InputGroup.Text>

          </InputGroup>
        </Form.Group>

        <Button className='mt-2 signup-btn' type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  )
}

export default SignUpForm