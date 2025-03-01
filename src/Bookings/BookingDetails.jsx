// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';
// import { Table } from 'react-bootstrap';
// import './Booking.css';

// function Booking() {
//   const [bookings, setBookings] = useState([]);
//   const { auth } = useContext(AuthContext);

//   useEffect(() => {
//     axios.get('http://localhost:9096/bookings/getAll', {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//       .then(response => {
//         setBookings(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the bookings!', error);
//       });
//   }, [auth.token]);

//   return (
//     <div className="booking-details-wrapper">
//       <div className="booking-details-container">
//         <h2 className="booking-details-title">Booking Details</h2>
//         <Table striped bordered hover className="booking-details-table">
//           <thead>
//             <tr>
//               <th>Booking ID</th>
//               <th>Patient Name</th>
//               <th>Patient Age</th>
//               <th>Patient Gender</th>
//               <th>Hospital Name</th>
//               <th>Hospital Address</th>
//               <th>Department</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={index}>
//                 <td>{booking.patientId}</td>
//                 <td>{booking.patientName}</td>
//                 <td>{booking.patientAge}</td>
//                 <td>{booking.patientGender}</td>
//                 <td>{booking.hospitalName}</td>
//                 <td>{booking.hospitalAddress}</td>
//                 <td>{booking.departmentName}</td>
//                 <td>{booking.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// }

// export default Booking;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Table, Button } from 'react-bootstrap';
import './Booking.css';

function BookingDetails() {
  const [bookings, setBookings] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    fetchBookings();
  }, [auth.token]);

  const fetchBookings = () => {
    axios.get('http://localhost:9096/bookings/getAll', {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the bookings!', error);
      });
  };

  const handleDelete = (bookingId) => {
    axios.delete(`http://localhost:9096/bookings/deleteByBookingId/${bookingId}`, {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
      .then(() => {
        fetchBookings(); // Refresh the bookings list after deletion
      })
      .catch(error => {
        console.error('There was an error deleting the booking!', error);
      });
  };

  const handleEdit = (booking) => {
    // Implement the edit functionality here
    console.log('Edit booking:', booking);
  };

  return (
    <div className="booking-details-wrapper">
      <div className="booking-details-container">
        <h2 className="booking-details-title">Booking Details</h2>
        <Table striped bordered hover className="booking-details-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Patient Name</th>
              <th>Patient Age</th>
              <th>Patient Gender</th>
              <th>Hospital Name</th>
              <th>Hospital Address</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.id}</td>
                <td>{booking.patientName}</td>
                <td>{booking.patientAge}</td>
                <td>{booking.patientGender}</td>
                <td>{booking.hospitalName}</td>
                <td>{booking.hospitalAddress}</td>
                <td>{booking.departmentName}</td>
                <td>{booking.status}</td>
                <td>
                  <Button variant="primary" onClick={() => handleEdit(booking)}>Edit</Button>{' '}
                  <Button variant="danger" onClick={() => handleDelete(booking.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default BookingDetails