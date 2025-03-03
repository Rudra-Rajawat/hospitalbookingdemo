// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "./AuthContext";

// const Signin = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const { setAuth } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const payload = {
//         username: name,
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
//         navigate("/hospital");
//     } catch (error) {
//     }
//   };

//   return (
//     <div className="authenticateUser">
//       <h2 className="formTitle">Log In</h2>
//       <form className="addUserForm" onSubmit={handleSubmit}>
//         <div className="mb-3 inputGroup">
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="form-control"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="d-flex justify-content-center">
//             <button type="submit" className="btn btn-primary">
//               Log In
//             </button>
//           </div>
//         </div>
//       </form>
//       <div className="login">
//         <p>
//           Do not have an account? <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signin;

// 
// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../AuthContext";
// import './Login.css';
// import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';

// const Signin = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const { setAuth } = useContext(AuthContext);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const payload = {
//         username: name,
//         password: password,
//       };
//       const response = await axios.post(
//         "http://localhost:9096/auth/authenticate",
//         payload
//       );

//       console.log('Response data:', response.data); // Log the response data

//       const { userId, jwtToken, role } = response.data;

//       if (jwtToken) {
//         setAuth({
//           id: userId,
//           token: jwtToken,
//           role: role,
//         });
//         navigate("/hospital");
//       } else {
//         console.error('JWT token is missing in the response');
//       }
//     } catch (error) {
//       console.error('Error during authentication:', error);
//       if (error.response) {
//         console.error('Response data:', error.response.data);
//       }
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-Form-container">
//         <h2 className="login-title">Login</h2>
//         <Form onSubmit={handleSubmit} className="login-Form">
//           <Form.Group className="mb-3" controlId="FormBasicName">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="FormBasicEmail">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit" className="login-button">
//           Login</Button>
//       </Form>
//         <p>
//           Do not have an account? <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signin;

// code which is has some problem to load patient details

// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../AuthContext";
// import { Form, Button } from "react-bootstrap";
// import "./Login.css";

// const Signin = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const { setAuth } = useContext(AuthContext);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const payload = {
//         username: name,
//         password: password,
//       };
//       const response = await axios.post(
//         "http://localhost:9096/auth/authenticate",
//         payload
//       );

//       console.log("Response data:", response.data);

//       const { userId, jwtToken, role } = response.data;

//       if (jwtToken) {
//         setAuth({
//           id: userId,
//           token: jwtToken,
//           role: role,
//         });
//         if(role === 'ADMIN') {
//         navigate("/hospital");
//         }else{
//           navigate("/bookAppointment");
//         }
//       } else {
//         console.error("JWT token is missing in the response");
//       }
//     } catch (error) {
//       console.error("Error during authentication:", error);
//       if (error.response) {
//         console.error("Response data:", error.response.data);
//       }
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-form-container">
//         <h2 className="login-title">Login</h2>
//         <Form onSubmit={handleSubmit} className="login-form">
//           <Form.Group className="mb-3" controlId="FormBasicName">
//             <Form.Control
//               type="text"
//               placeholder="Enter name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="FormBasicPassword">
//             <Form.Control
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit" className="login-button">
//             Login
//           </Button>
//         </Form>
//         <p className="redirect-link">
//           Do not have an account? <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signin;

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

const Signin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        username: name,
        password: password,
      }
      const response = await axios.post(
        "http://localhost:9096/auth/authenticate",
        payload
      );

      const { id, jwtToken, role } = response.data;

      setAuth({
        id: id,
        token: jwtToken,
        role: role,
      });

      localStorage.setItem('auth_id', id);
      localStorage.setItem('auth_token', jwtToken);
      localStorage.setItem('auth_role', role);
        navigate("/home");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Group className="mb-3" controlId="FormBasicName">
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="FormBasicPassword">
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </Form>
        <p className="redirect-link">
          Do not have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
