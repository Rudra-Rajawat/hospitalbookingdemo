import React from 'react';
import img from './images/img5.jpg';
import cardImage from './images/img3.jpg';

function Home() {
  return (
    <div className="container-fluid p-0 home-container">
      <div className="text-center text-white bg-dark py-2 w-100">
        <h2>Welcome to the Appointment Booking System</h2>
      </div>
      <div
        className="home-content text-center text-white d-flex flex-column align-items-center justify-content-center vh-100 w-100"
        style={{ 
          backgroundImage: `url(${img})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="row w-100 justify-content-center mt-4 text-dark">
          <div className="card mb-4" style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none' }}>
            <img src={cardImage} className="card-img-top" alt="Card Image" />
            <div className="card-body text-center">
              <h5 className="card-title">Book an Appointment</h5>
              <p className="card-text">Easily book an appointment with one of our partnered hospitals.</p>
              <a href="/login" className="btn btn-success">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
