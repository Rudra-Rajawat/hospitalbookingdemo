import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Booking.css';

function Booking() {
  return (
    <div className="booking-details-wrapper">
      <div className="booking-details-container">
        <h2 className="booking-details-title">Booking Details</h2>
        <table className="booking-details-table">
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Patient Age</th>
              <th>Patient Gender</th>
              <th>Hospital Name</th>
              <th>Hospital Address</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>
          {/* <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.id}</td>
                <td>{booking.patientId}</td>
                <td>{booking.patientName}</td>
                <td>{booking.patientAge}</td>
                <td>{booking.patientGender}</td>
                <td>{booking.hospitalId}</td>
                <td>{booking.hospitalName}</td>
                <td>{booking.hospitalAddress}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
}

export default Booking;