import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider'; // Make sure to import the ImageSlider component
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="navbar-brand">Appointment Booking</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/registration" className="nav-link">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/bookAppointment" className="nav-link">Book Appointment</Link>
          </li>
        </ul>
      </nav>
      <div className="home-content">
        <h2>Welcome to the Appointment Booking System</h2>
        <p>Book your appointments easily and quickly.</p>
        <ImageSlider /> {/* Add the ImageSlider component here */}
      </div>
    </div>
  );
}

export default Home;