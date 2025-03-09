// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4">About Us</h1>
//       <p className="lead">
//         Welcome to our Hospital Appointment Site. We are dedicated to providing you with the best healthcare services. Our platform allows you to book appointments with top doctors, view your medical records, and receive timely reminders for your appointments.
//       </p>
//       <h2 className="mt-4">Contact Us</h2>
//       <p>
//         For complaints and feedback, please email us at: <a href="mailto:feedback@hospitalappointmentsite.com">feedback@hospitalappointmentsite.com</a>
//       </p>
//       <p>
//         You can also reach us at: <strong>+1-234-567-890</strong>
//       </p>
//     </div>
//   );
// };

// export default AboutUs;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img from './images/img6.jpg';

const AboutUs = () => {
  return (
    <Container fluid className="p-0">
      <div className="text-center text-white bg-dark py-2 w-100">
        {/* <h2>About Us</h2> */}
      </div>
      
      {/* Section with background image */}
      <Row 
        className="text-white d-flex flex-column align-items-center justify-content-center vh-100 w-100" 
        style={{ 
          backgroundImage: `url(${img})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
        }}
      >
        <Col className="text-center">
          <h2 className="display-4 font-weight-bold">Our Commitment to Your Health</h2>
          <p className="lead mt-3">
            Welcome to our Hospital Appointment Site. We are dedicated to providing you with the best healthcare services. Our platform allows you to book appointments with top doctors, view your medical records, and receive timely reminders for your appointments.
          </p>
        </Col>
        <div>
        <h2 className="mt-4">Contact Us</h2>
          <p>
            For complaints and feedback, please email us at: <a href="mailto:feedback@hospitalappointmentsite.com" className="text-white font-weight-bold">feedback@hospitalappointmentsite.com</a>
          </p>
          <p>
            You can also reach us at: <strong className="font-weight-bold ">+1-234-567-890</strong>
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default AboutUs;