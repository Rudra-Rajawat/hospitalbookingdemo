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

// working with admin 

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';
// import { Table, Button } from 'react-bootstrap';
// import './Booking.css';

// function BookingDetails() {
//   const [bookings, setBookings] = useState([]);
//   const { auth } = useContext(AuthContext);

//   useEffect(() => {
//     fetchBookings();
//   }, [auth.token]);

//   const fetchBookings = () => {
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
//   };

//   const handleDelete = (bookingId) => {
//     axios.delete(`http://localhost:9096/bookings/deleteByBookingId/${bookingId}`, {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//       .then(() => {
//         fetchBookings(); // Refresh the bookings list after deletion
//       })
//       .catch(error => {
//         console.error('There was an error deleting the booking!', error);
//       });
//   };

//   const handleEdit = (booking) => {
//     // Implement the edit functionality here
//     console.log('Edit booking:', booking);
//   };

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
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={index}>
//                 <td>{booking.id}</td>
//                 <td>{booking.patientName}</td>
//                 <td>{booking.patientAge}</td>
//                 <td>{booking.patientGender}</td>
//                 <td>{booking.hospitalName}</td>
//                 <td>{booking.hospitalAddress}</td>
//                 <td>{booking.departmentName}</td>
//                 <td>{booking.status}</td>
//                 <td>
//                   <Button variant="primary" onClick={() => handleEdit(booking)}>Edit</Button>{' '}
//                   <Button variant="danger" onClick={() => handleDelete(booking.id)}>Delete</Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// }

// export default BookingDetails

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';
// import { Table, Button } from 'react-bootstrap';
// import './Booking.css';

// function BookingDetails() {
//   const [bookings, setBookings] = useState([]);
//   const { auth } = useContext(AuthContext);

//   useEffect(() => {
//     fetchBookings();
//   }, [auth.token]);

//   const fetchBookings = () => {
//     let url = 'http://localhost:9096/bookings/getAll';
//     if (auth.role === 'PATIENT') {
//       const patientId = localStorage.getItem('patientId');
//       url = `http://localhost:9096/bookings/getByPatientId/${patientId}`;
//     }

//     axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//     .then(response => {
//       setBookings(response.data);
//     })
//     .catch(error => {
//       console.error('There was an error fetching the bookings!', error);
//     });
//   };

//   const handleDelete = (bookingId) => {
//     axios.delete(`http://localhost:9096/bookings/deleteByBookingId/${bookingId}`, {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//     .then(() => {
//       fetchBookings(); // Refresh the bookings list after deletion
//     })
//     .catch(error => {
//       console.error('There was an error deleting the booking!', error);
//     });
//   };

//   const handleEdit = (booking) => {
//     // Implement the edit functionality here
//     console.log('Edit booking:', booking);
//   };

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
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={index}>
//                 <td>{booking.id}</td>
//                 <td>{booking.patientName}</td>
//                 <td>{booking.patientAge}</td>
//                 <td>{booking.patientGender}</td>
//                 <td>{booking.hospitalName}</td>
//                 <td>{booking.hospitalAddress}</td>
//                 <td>{booking.departmentName}</td>
//                 <td>{booking.status}</td>
//                 <td>
//                   <Button variant="primary" onClick={() => handleEdit(booking)}>Edit</Button>{' '}
//                   <Button variant="danger" onClick={() => handleDelete(booking.id)}>Delete</Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// }

// export default BookingDetails;


// working code with to show admin and user booking details

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';
// import { Table, Button } from 'react-bootstrap';
// import './Booking.css';

// function BookingDetails() {
//   const [bookings, setBookings] = useState([]);
//   const { auth } = useContext(AuthContext);

//   useEffect(() => {
//     fetchBookings();
//   }, [auth.token]);

//   const fetchBookings = () => {
//     let url = 'http://localhost:9096/bookings/getAll';
//     if (auth.role === 'PATIENT') {
//       const patientId = localStorage.getItem('patientId');
//       url = `http://localhost:9096/bookings/getByPatientId/${patientId}`;
//     }

//     axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//     .then(response => {
//       setBookings(response.data);
//     })
//     .catch(error => {
//       console.error('There was an error fetching the bookings!', error);
//     });
//   };

//   const handleDelete = (bookingId) => {
//     axios.delete(`http://localhost:9096/bookings/deleteByBookingId/${bookingId}`, {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//     .then(() => {
//       fetchBookings(); // Refresh the bookings list after deletion
//     })
//     .catch(error => {
//       console.error('There was an error deleting the booking!', error);
//     });
//   };

//   const handleEdit = (booking) => {
//     // Implement the edit functionality here
//     console.log('Edit booking:', booking);
//   };

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
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={index}>
//                 <td>{booking.id}</td>
//                 <td>{booking.patientName}</td>
//                 <td>{booking.patientAge}</td>
//                 <td>{booking.patientGender}</td>
//                 <td>{booking.hospitalName}</td>
//                 <td>{booking.hospitalAddress}</td>
//                 <td>{booking.departmentName}</td>
//                 <td>{booking.status}</td>
//                 <td>
//                   <Button variant="primary" onClick={() => handleEdit(booking)}>Edit</Button>{' '}
//                   <Button variant="danger" onClick={() => handleDelete(booking.id)}>Delete</Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// }

// export default BookingDetails;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Table, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './booking1.css';

function BookingDetails() {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [bookingsPerPage] = useState(20);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    fetchBookings();
  }, [auth.token]);

  const fetchBookings = () => {
    let url = 'http://localhost:9096/bookings/getAll';
    if (auth.role === 'PATIENT') {
      const patientId = localStorage.getItem('patientId');
      url = `http://localhost:9096/bookings/getByPatientId/${patientId}`;
    }

    axios.get(url, {
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

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * bookingsPerPage;
  const currentBookings = bookings.slice(offset, offset + bookingsPerPage);

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
            {currentBookings.map((booking, index) => (
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
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(bookings.length / bookingsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
}

export default BookingDetails;