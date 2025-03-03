import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Registration() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the payload with the role set to "PATIENT" by default
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
      roles: "PATIENT" 
    };

    axios.post('http://localhost:9096/auth/new', payload)
      .then((res) => {
        console.log(res);
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">Register</h2>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Register
          </Button>
        </Form>
        <p className="redirect-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;