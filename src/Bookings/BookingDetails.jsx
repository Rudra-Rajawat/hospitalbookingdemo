import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './booking1.css';

function BookingDetails() {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [bookingsPerPage] = useState(10);
  const { auth } = useContext(AuthContext);

  // States for editing a booking
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [editForm, setEditForm] = useState({
    patientName: '',
    patientAge: '',
    patientGender: '',
    hospitalName: '',
    hospitalAddress: '',
    departmentName: '',
    status: ''
  });

  useEffect(() => {
    fetchBookings();
  }, [auth.token]);

  const fetchBookings = () => {
    let url = 'http://localhost:9096/bookings/getAll';

    // If the logged-in user is a patient,
    // use the patient ID from auth context, or fallback to localStorage.
    if (auth.role === 'PATIENT') {
      const patientId = auth.id || localStorage.getItem("patientId");
      url = `http://localhost:9096/bookings/getByPatientId/${patientId}`;
      console.log("Fetching bookings for patient ID:", patientId);

    }

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      })
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the bookings!', error);
      });
  };

  const handleDelete = (bookingId) => {
    axios
      .delete(`http://localhost:9096/bookings/deleteByBookingId/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      })
      .then(() => {
        fetchBookings(); // Refresh bookings after deletion
      })
      .catch((error) => {
        console.error('There was an error deleting the booking!', error);
      });
  };

  // Triggered when the Edit button is clicked
  const handleEdit = (booking) => {
    setCurrentBooking(booking);
    setEditForm({
      patientName: booking.patientName,
      patientAge: booking.patientAge,
      patientGender: booking.patientGender,
      hospitalName: booking.hospitalName,
      hospitalAddress: booking.hospitalAddress,
      departmentName: booking.departmentName,
      status: booking.status
    });
    setShowEditModal(true);
  };

  // Called when the Update button in the modal is clicked
  const handleUpdateBooking = () => {
    axios
      .put(
        `http://localhost:9096/bookings/updateBooking/${currentBooking.id}`,
        editForm,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        }
      )
      .then((response) => {
        console.log('Booking updated successfully:', response.data);
        fetchBookings(); // Refresh the bookings list after update
        setShowEditModal(false);
        setCurrentBooking(null);
      })
      .catch((error) => {
        console.error('There was an error updating the booking!', error);
      });
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
              <th>Patient ID</th>
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
                <td>{booking.patientId}</td>
                <td>{booking.patientName}</td>
                <td>{booking.patientAge}</td>
                <td>{booking.patientGender}</td>
                <td>{booking.hospitalName}</td>
                <td>{booking.hospitalAddress}</td>
                <td>{booking.departmentName}</td>
                <td>{booking.status}</td>
                <td>
                  <Button variant="primary" onClick={() => handleEdit(booking)}>
                    Edit
                  </Button>{' '}
                  <Button variant="danger" onClick={() => handleDelete(booking.id)}>
                    Delete
                  </Button>
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

      {/* Edit Booking Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="patientName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                value={editForm.patientName}
                onChange={(e) =>
                  setEditForm({ ...editForm, patientName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="patientAge">
              <Form.Label>Patient Age</Form.Label>
              <Form.Control
                type="number"
                value={editForm.patientAge}
                onChange={(e) =>
                  setEditForm({ ...editForm, patientAge: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="patientGender">
              <Form.Label>Patient Gender</Form.Label>
              <Form.Control
                type="text"
                value={editForm.patientGender}
                onChange={(e) =>
                  setEditForm({ ...editForm, patientGender: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="hospitalName">
              <Form.Label>Hospital Name</Form.Label>
              <Form.Control
                type="text"
                value={editForm.hospitalName}
                onChange={(e) =>
                  setEditForm({ ...editForm, hospitalName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="hospitalAddress">
              <Form.Label>Hospital Address</Form.Label>
              <Form.Control
                type="text"
                value={editForm.hospitalAddress}
                onChange={(e) =>
                  setEditForm({ ...editForm, hospitalAddress: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="departmentName">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                value={editForm.departmentName}
                onChange={(e) =>
                  setEditForm({ ...editForm, departmentName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                value={editForm.status}
                onChange={(e) =>
                  setEditForm({ ...editForm, status: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateBooking}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BookingDetails;


