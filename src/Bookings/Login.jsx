


// import React, { useContext, useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';

// function Login() {
//   const [values, setValues] = useState({
//     username: '',
//     password: ''
//   });
//   const { setAuth } = useContext(AuthContext);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const payload = {
//         username: username,
//         password: password,
//       }
//       const response = await axios.post(
//         "http://localhost:9096/auth/authenticate",
//         payload
//       );

//       const { userId, jwtToken, role } = response.data;

//       setAuth({
//         id: userId,
//         token: jwtToken,
//         role: role,
//       });
//         navigate("/events");
//     } catch (error) {
//       console.log("Error");
      
//     }
//   };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const payload = {
  //     username: values.username,
  //     password: values.password
  //   };

  //   axios.post('http://localhost:9096/auth/authenticate', payload)
  // .then((res) => {
  //   console.log('Response:', res);
  //   if (res.data) {
  //     console.log('JWT Token:', res.data);
  //     localStorage.setItem('token', res.data);
  //     navigate('/bookAppointment');
  //   } else {
  //     console.error('Token not found in response');
  //   }
  // })
  // .catch((err) => console.error('Error:', err));
  // };

//   return (
//     <div className="login-wrapper">
//       <div className="login-form-container">
//         <h2 className="login-title">Login</h2>
//         <Form onSubmit={handleSubmit} className="login-form">
//           <Form.Group className="mb-3" controlId="formBasicUsername">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter username"
//               value={values.username}
//               onChange={(e) => setValues({ ...values, username: e.target.value })}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter password"
//               value={values.password}
//               onChange={(e) => setValues({ ...values, password: e.target.value })}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit" className="login-button">
//             Login
//           </Button>
//         </Form>
//         <p className="redirect-link">
//           Don't have an account? <Link to="/registration">Register here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

// with validations

// import React, { useState } from 'react';
// import { Form, Button} from 'react-bootstrap';
// import { Link} from 'react-router-dom';
// import './Login.css';


// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});


//   const validateForm = () => {
//     const newErrors = {};
//     if (!email) newErrors.email = 'Email is required';
//     else if (!/S+@S+.S+/.test(email)) newErrors.email = 'Email is invalid';
//     if (!password) newErrors.password = 'Password is required';
//     else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     return newErrors;
//   };


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       console.log('Login attempted with:', { email, password });
//       // Here you would typically send a request to your server
//     }
//   };


//   return (
//     <div className="login-wrapper">
//       <div className="login-form-container">
//         <h2 className="login-title">Login</h2>
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


//           <Button variant="primary" type="submit" className="login-button">
//             Login
//           </Button>
//         </Form>
//         <p className="redirect-link">
//           Don't have an account? <Link to="/registration">Register here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }


// export default Login;

// Role compoenent Admin, Patient

// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('PATIENT'); // Default role
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
//     if (!password) newErrors.password = 'Password is required';
//     else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     return newErrors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       console.log('Login attempted with:', { email, password, role });
//       // Here you would typically send a request to your server
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-form-container">
//         <h2 className="login-title">Login</h2>
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

//           <Form.Group className="mb-3" controlId="formBasicRole">
//             <Form.Label></Form.Label>
//             <Form.Control
//               as="select"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <option value="ADMIN">ADMIN</option>
//               <option value="PATIENT">PATIENT</option>
//             </Form.Control>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="login-button">
//             Login
//           </Button>
//         </Form>
//         <p className="redirect-link">
//           Don't have an account? <Link to="/registration">Register here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};
//     if (!email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
//     if (!password) newErrors.password = 'Password is required';
//     else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     return newErrors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       console.log('Login attempted with:', { email, password });
//       // Simulate successful login
//       navigate('/patient-registration');
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-form-container">
//         <h2 className="login-title">Login</h2>
//         <Form onSubmit={handleSubmit} className="login-form">
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
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
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.password}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="login-button">
//             Login
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};
//     if (!email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
//     if (!password) newErrors.password = 'Password is required';
//     else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     return newErrors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       console.log('Login attempted with:', { email, password });
//       // Simulate successful login
//       navigate('/dashboard');
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-form-container">
//         <h2 className="login-title">Login</h2>
//         <Form onSubmit={handleSubmit} className="login-form">
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
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
//             <Form.Label>Password</Form.Label>
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

//           <Button variant="primary" type="submit" className="login-button">
//             Login
//           </Button>
//         </Form>
//         <p className="redirect-link">
//           Don't have an account? <Link to="/register">Register here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;