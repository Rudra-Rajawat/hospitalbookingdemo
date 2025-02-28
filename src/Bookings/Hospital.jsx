
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [showForm, setShowForm] = useState(false);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:9096/hospitals/getAll', {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
      .then(response => {
        setHospitals(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the hospitals!', error);
      });
  }, [auth.token]);

  const handleAddHospital = () => {
    setShowForm(true);
  };

  const handleSubmit = () => {
    axios.post('http://localhost:9096/hospitals/register', { name, address }, {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
      .then(response => {
        setHospitals([...hospitals, response.data]);
        setName('');
        setAddress('');
        setShowForm(false);
      })
      .catch(error => {
        console.error('There was an error adding the hospital!', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Hospital List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Hospital Name</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map(hospital => (
            <tr key={hospital.id}>
              <td>{hospital.id}</td>
              <td>{hospital.name}</td>
              <td>{hospital.address}</td>
              <td>
                <button className="btn btn-primary" onClick={handleAddHospital}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <div className="mt-3">
          <h4>Add New Hospital</h4>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className="btn btn-success mt-2" onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Hospital;