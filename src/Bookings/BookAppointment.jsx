import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function BookAppointment() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [hospital, setHospital] = useState('');
  const [departments, setDepartments] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const genders = ['Male', 'Female'];

  useEffect(() => {
    if (auth.role !== 'PATIENT' && auth.role !== 'ADMIN') {
      navigate('/unauthorized');
      return;
    }

    axios.get('http://localhost:9096/patients/hospitals/getAll', {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
      .then(response => {
        setHospitals(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the hospitals!', error);
      });

    axios.get('http://localhost:9096/patients/departments/getAll', {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
      .then(response => {
        setDepartments(response.data.map(department => ({
          value: department.id,
          label: department.name
        })));
      })
      .catch(error => {
        console.error('There was an error fetching the departments!', error);
      });
  }, [auth.token, auth.role, navigate]);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!age) newErrors.age = 'Age is required';
    if (!gender) newErrors.gender = 'Gender is required';
    if (!hospital) newErrors.hospital = 'Hospital is required';
    if (selectedDepartments.length === 0) newErrors.departments = 'At least one department is required';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      const patientData = {
        name,
        age,
        gender
      };

      axios.post('http://localhost:9096/patients/register', patientData, {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      })
        .then(response => {
          const patientId = response.data.id;
          localStorage.setItem('patientId', patientId);
          const selectedHospital = hospitals.find(h => h.name === hospital);

          const bookingPromises = selectedDepartments.map(department => {
            const bookingUrl = `http://localhost:9096/patients/${patientId}/register/${selectedHospital.id}/toDepartment/${department.value}`;
            return axios.post(bookingUrl, {}, {
              headers: {
                Authorization: `Bearer ${auth.token}`
              }
            });
          });

          Promise.all(bookingPromises)
            .then(() => {
              setShowModal(true);
            })
            .catch(error => {
              console.error('There was an error booking the appointments!', error);
            });
        })
        .catch(error => {
          console.error('There was an error registering the patient!', error);
        });
    }
  };

  const handleCompleteBooking = () => {
    setShowModal(false);
    navigate('/booking');
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
              as="select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              isInvalid={!!errors.gender}
            >
              <option value="">Select Gender</option>
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.gender}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicHospital">
            <Form.Label></Form.Label>
            <Form.Control
              as="select"
              value={hospital}
              placeholder="Select Hospital"
              onChange={(e) => setHospital(e.target.value)}
              isInvalid={!!errors.hospital}
            >
              <option value="">Select Hospital</option>
              {hospitals.map((hospital) => (
                <option key={hospital.id} value={hospital.name}>
                  {hospital.name}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.hospital}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDepartment">
            <Form.Label></Form.Label>
            <Select
              isMulti
              options={departments}
              value={selectedDepartments}
              placeholder="Select Departments"
              onChange={setSelectedDepartments}
              className={errors.departments ? 'is-invalid' : ''}
            />
            {errors.departments && (
              <div className="invalid-feedback">
                {errors.departments}
              </div>
            )}
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Book Appointment
          </Button>
        </Form>
      </div>

      <Modal show={showModal} onHide={handleCompleteBooking}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your appointments have been successfully booked.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCompleteBooking}>
            Complete Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BookAppointment;