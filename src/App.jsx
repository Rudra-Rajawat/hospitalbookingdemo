import React from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Home from './Bookings/Home';
import Signin from './Bookings/Signin';
import Registration from './Bookings/Registration';
import BookAppointment from './Bookings/BookAppointment';
import Hospital from './Bookings/Hospital';
import Depatment from './Bookings/Depatment';
import BookingDetails from './Bookings/BookingDetails';
import './App.css';
import AboutUs from './Bookings/AboutUs';
import Navigation from './Bookings/Navigation';



function App() {
  return (
    <AuthProvider>
      <div align="center" className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/bookAppointment" element={<BookAppointment />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/booking" element={<BookingDetails />} />
          <Route path="/department" element={<Depatment />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 w-100">
        <div className="container">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
