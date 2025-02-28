import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';

function Patient() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [hospital, setHospital] = useState('');
  const [department, setDepartment] = useState('');
  const [errors, setErrors] = useState({});

  const hospitals = ['Yashoda', 'Appollo', 'Osmania', 'Continental', 'Aster Prime', 'AIG'];
  const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Pathology', 'Dermatology', 'Radiology', 'Gastroenterology'];

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!age) newErrors.age = 'Age is required';
    if (!gender) newErrors.gender = 'Gender is required';
    if (!hospital) newErrors.hospital = 'Hospital is required';
    if (!department) newErrors.department = 'Department is required';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log('Appointment booked with:', { name, age, gender, hospital, department });
      // Here you would typically send a request to your server
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">Patient Registration</h2>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              isInvalid={!!errors.age}
            />
            <Form.Control.Feedback type="invalid">
              {errors.age}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicGender">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              isInvalid={!!errors.gender}
            />
            <Form.Control.Feedback type="invalid">
              {errors.gender}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicHospital">
            <Form.Label></Form.Label>
            <Form.Control
              as="select"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              isInvalid={!!errors.hospital}
            >
              <option value="">Select Hospital</option>
              {hospitals.map((hospital, index) => (
                <option key={index} value={hospital}>
                  {hospital}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.hospital}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDepartment">
            <Form.Label></Form.Label>
            <Form.Control
              as="select"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              isInvalid={!!errors.department}
            >
              <option value="">Select Department</option>
              {departments.map((department, index) => (
                <option key={index} value={department}>
                  {department}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.department}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Book Appointment
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Patient;