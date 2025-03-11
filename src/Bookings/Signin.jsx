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
//       }
//       const response = await axios.post(
//         "http://localhost:9096/auth/authenticate",
//         payload
//       );

//       const { id, jwtToken, role } = response.data;

//       setAuth({
//         id: id,
//         token: jwtToken,
//         role: role,
//       });

//       localStorage.setItem('auth_id', id);
//       localStorage.setItem('auth_token', jwtToken);
//       localStorage.setItem('auth_role', role);
//       navigate("/BookAppointment");
//     } catch (error) {
//       console.log(error)
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
//           Do not have an account? <Link to="/registration">Sign Up</Link>
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
import { Form, Button, Alert } from "react-bootstrap";
import "./Login.css";

const Signin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Simple validation
    if (!name.trim() || !password.trim()) {
      setErrorMessage("Name and Password are required fields.");
      return;
    }

    try {
      const payload = {
        username: name,
        password: password,
      };
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
      navigate("/BookAppointment");
    } catch (error) {
      console.log(error);
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
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
          Do not have an account? <Link to="/registration">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
