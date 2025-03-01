// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';

// const Hospital = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const { auth } = useContext(AuthContext);

//   useEffect(() => {
//     axios.get('http://localhost:9096/hospitals/getAll', {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//       .then(response => {
//         setHospitals(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the hospitals!', error);
//       });
//   }, [auth.token]);

//   const handleAddHospital = () => {
//     setShowForm(true);
//   };

//   const handleSubmit = () => {
//     axios.post('http://localhost:9096/hospitals/register', { name, address }, {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//       .then(response => {
//         setHospitals([...hospitals, response.data]);
//         setName('');
//         setAddress('');
//         setShowForm(false);
//       })
//       .catch(error => {
//         console.error('There was an error adding the hospital!', error);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Hospital List</h2>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Hospital Name</th>
//             <th>Address</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {hospitals.map(hospital => (
//             <tr key={hospital.id}>
//               <td>{hospital.id}</td>
//               <td>{hospital.name}</td>
//               <td>{hospital.address}</td>
//               <td>
//                 <button className="btn btn-primary" onClick={handleAddHospital}>Add</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {showForm && (
//         <div className="mt-3">
//           <h4>Add New Hospital</h4>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="address">Address:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </div>
//           <button className="btn btn-success mt-2" onClick={handleSubmit}>Submit</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hospital;

    // working code with edit and add functionality

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';

// const Hospital = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentHospitalId, setCurrentHospitalId] = useState(null);
//   const { auth } = useContext(AuthContext);

//   useEffect(() => {
//     axios.get('http://localhost:9096/hospitals/getAll', {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//       .then(response => {
//         setHospitals(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the hospitals!', error);
//       });
//   }, [auth.token]);

//   const handleAddHospital = () => {
//     setShowForm(true);
//     setIsEditing(false);
//     setName('');
//     setAddress('');
//   };

//   const handleEditHospital = (hospital) => {
//     setShowForm(true);
//     setIsEditing(true);
//     setCurrentHospitalId(hospital.id);
//     setName(hospital.name);
//     setAddress(hospital.address);
//   };

//   const handleSubmit = () => {
//     if (isEditing) {
//       axios.put(`http://localhost:9096/hospitals/updateHospital/${currentHospitalId}`, { name, address }, {
//         headers: {
//           Authorization: `Bearer ${auth.token}`
//         }
//       })
//         .then(response => {
//           setHospitals(hospitals.map(hospital => hospital.id === currentHospitalId ? response.data : hospital));
//           setShowForm(false);
//           setIsEditing(false);
//           setName('');
//           setAddress('');
//         })
//         .catch(error => {
//           console.error('There was an error updating the hospital!', error);
//         });
//     } else {
//       axios.post('http://localhost:9096/hospitals/register', { name, address }, {
//         headers: {
//           Authorization: `Bearer ${auth.token}`
//         }
//       })
//         .then(response => {
//           setHospitals([...hospitals, response.data]);
//           setShowForm(false);
//           setName('');
//           setAddress('');
//         })
//         .catch(error => {
//           console.error('There was an error adding the hospital!', error);
//         });
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Hospital List</h2>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Hospital Name</th>
//             <th>Address</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {hospitals.map(hospital => (
//             <tr key={hospital.id}>
//               <td>{hospital.id}</td>
//               <td>{hospital.name}</td>
//               <td>{hospital.address}</td>
//               <td>
//                 <button className="btn btn-primary" onClick={() => handleEditHospital(hospital)}>Edit</button>
//                 <button className="btn btn-success ml-2" onClick={handleAddHospital}>Add</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {showForm && (
//         <div className="mt-3">
//           <h4>{isEditing ? 'Edit Hospital' : 'Add New Hospital'}</h4>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="address">Address:</label>
//             <input
//               type="text"
//              Name="form-control"
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </div>
//           <button className="btn btn-success mt-2" onClick={handleSubmit}>{isEditing ? 'Update' : 'Submit'}</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hospital;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Modal, Button } from 'react-bootstrap';

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentHospitalId, setCurrentHospitalId] = useState(null);
  const [showModal, setShowModal] = useState(false);
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
    if (isEditing) {
      axios.put(`http://localhost:9096/hospitals/updateHospital/${currentHospitalId}`, { name, address }, {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      })
        .then(response => {
          setHospitals(hospitals.map(hospital => hospital.id === currentHospitalId ? response.data : hospital));
          setIsEditing(false);
          setName('');
          setAddress('');
          setCurrentHospitalId(null);
          setShowModal(false);
        })
        .catch(error => {
          console.error('There was an error updating the hospital!', error);
        });
    } else {
      axios.post('http://localhost:9096/hospitals/register', { name, address }, {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      })
        .then(response => {
          setHospitals([...hospitals, response.data]);
          setName('');
          setAddress('');
          setShowModal(false);
        })
        .catch(error => {
          console.error('There was an error adding the hospital!', error);
        });
    }
  };

  const handleEditHospital = (hospital) => {
    setIsEditing(true);
    setName(hospital.name);
    setAddress(hospital.address);
    setCurrentHospitalId(hospital.id);
    setShowModal(true);
  };

  const handleDeleteHospital = (id) => {
    axios.delete(`http://localhost:9096/hospitals/deleteById/${id}`, {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
      .then(() => {
        setHospitals(hospitals.filter(hospital => hospital.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the hospital!', error);
      });
  };

  const handleShowModal = () => {
    setIsEditing(false);
    setName('');
    setAddress('');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
                <button className="btn btn-primary" onClick={() => handleEditHospital(hospital)}>Edit</button>
                <button className="btn btn-danger ml-2" onClick={() => handleDeleteHospital(hospital.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-success mt-2" onClick={handleShowModal}>Add New Hospital</button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Hospital' : 'Add New Hospital'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddHospital}>
            {isEditing ? 'Update' : 'Submit'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Hospital;