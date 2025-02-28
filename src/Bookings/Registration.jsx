import React, { useState } from 'react';
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Registration() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'PATIENT'
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the payload
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
      roles: values.role
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
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRole">
            <Form.Label></Form.Label>
            <DropdownButton
              id="dropdown-basic-button"
              title={values.role}
              onSelect={(e) => setValues({ ...values, role: e })}
            >
              <Dropdown.Item eventKey="ADMIN">ADMIN</Dropdown.Item>
              <Dropdown.Item eventKey="PATIENT">PATIENT</Dropdown.Item>
            </DropdownButton>
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

//  registration code with validation

// import React, { useState } from 'react';
// import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './Login.css';

// function Registration() {

//   const[name,setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [role, setRole] = useState('PATIENT'); // Default role
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!name) newErrors.name = 'name is required';
//     if (!email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
//     if (!password) newErrors.password = 'Password is required';
//     else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
//     else if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords do not match';
//     return newErrors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       console.log('Registration attempted with:', { name, email, password, role });
//       // Here you would typically send a request to your server
//     }
//   };
//   return (
//     <div className="login-wrapper">
//       <div className="login-form-container">
//         <h2 className="login-title">Register</h2>
//         <Form onSubmit={handleSubmit} className="login-form">
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               isInvalid={!!errors.name}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.name}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.email}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.password}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               isInvalid={!!errors.confirmPassword}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.confirmPassword}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicRole">
//             <Form.Label></Form.Label>
//             <DropdownButton
//               id="dropdown-basic-button"
//               title={role}
//               onSelect={(e) => setRole(e)}
//             >
//               <Dropdown.Item eventKey="ADMIN">ADMIN</Dropdown.Item>
//               <Dropdown.Item eventKey="PATIENT">PATIENT</Dropdown.Item>
//             </DropdownButton>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="login-button">
//             Register
//           </Button>
//         </Form>
//         <p className="redirect-link">
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Registration;

// import React, { useState } from 'react';
// import { Form, Button} from 'react-bootstrap';
// import { Link} from 'react-router-dom';
// import './Login.css';

// function Registration() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
//     if (!password) newErrors.password = 'Password is required';
//     else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
//     else if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords do not match';
//     return newErrors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       console.log('Registration attempted with:', { email, password });
//       // Here you would typically send a request to your server
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-form-container">
//         <h2 className="login-title">Register</h2>
//         <Form onSubmit={handleSubmit} className="login-form">
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.email}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.password}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               isInvalid={!!errors.confirmPassword}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.confirmPassword}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="login-button">
//             Register
//           </Button>
//         </Form>
//         <p className="redirect-link">
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Registration;