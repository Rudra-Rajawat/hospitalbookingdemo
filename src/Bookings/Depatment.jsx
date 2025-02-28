import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Department.css';

function DepartmentRegistration() {
  const [departmentName, setDepartmentName] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!departmentName) newErrors.departmentName = 'Department name is required';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log('Department registered:', { departmentName });
      // Here you would typically send a request to your server
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-form-container">
        <h2 className="register-title">Department Registration</h2>
        <Form onSubmit={handleSubmit} className="register-form">
          <Form.Group className="mb-3" controlId="formBasicDepartmentName">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department name"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              isInvalid={!!errors.departmentName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.departmentName}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="register-button">
            Register Department
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default DepartmentRegistration;