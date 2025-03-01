// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';

// const Department = () => {
//   const [departments, setDepartments] = useState([]);
//   const [name, setName] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentDepartmentId, setCurrentDepartmentId] = useState(null);
//   const { auth } = useContext(AuthContext);

//   useEffect(() => {
//     axios.get('http://localhost:9096/departments/getAll', {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//       .then(response => {
//         setDepartments(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the departments!', error);
//       });
//   }, [auth.token]);

//   const handleAddDepartment = () => {
//     setShowForm(true);
//     setIsEditing(false);
//     setName('');
//   };

//   const handleEditDepartment = (department) => {
//     setShowForm(true);
//     setIsEditing(true);
//     setCurrentDepartmentId(department.id);
//     setName(department.name);
//   };

//   const handleSubmit = () => {
//     if (isEditing) {
//       axios.put(`http://localhost:9096/departments/updateDepartment/${currentDepartmentId}`, { name }, {
//         headers: {
//           Authorization: `Bearer ${auth.token}`
//         }
//       })
//         .then(response => {
//           setDepartments(departments.map(department => department.id === currentDepartmentId ? response.data : department));
//           setShowForm(false);
//           setIsEditing(false);
//           setName('');
//         })
//         .catch(error => {
//           console.error('There was an error updating the department!', error);
//         });
//     } else {
//       axios.post('http://localhost:9096/departments/register', { name}, {
//         headers: {
//           Authorization: `Bearer ${auth.token}`
//         }
//       })
//         .then(response => {
//           setDepartments([...departments, response.data]);
//           setShowForm(false);
//           setName('');
//         })
//         .catch(error => {
//           console.error('There was an error adding the department!', error);
//         });
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Department List</h2>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Department Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {departments.map(department => (
//             <tr key={department.id}>
//               <td>{department.id}</td>
//               <td>{department.name}</td>
//               <td>
//                 <button className="btn btn-primary" onClick={() => handleEditDepartment(department)}>Edit</button>
//                 <button className="btn btn-success ml-2" onClick={handleAddDepartment}>Add</button>
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
//           <button className="btn btn-success mt-2" onClick={handleSubmit}>{isEditing ? 'Update' : 'Submit'}</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Department;


// working code with edit+delete and register on the bottom

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';

// const Department = () => {
//   const [departments, setDepartments] = useState([]);
//   const [name, setName] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentDepartmentId, setCurrentDepartmentId] = useState(null);
//   const { auth } = useContext(AuthContext);

//   useEffect(() => {
//     axios.get('http://localhost:9096/departments/getAll', {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//       .then(response => {
//         setDepartments(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the departments!', error);
//       });
//   }, [auth.token]);

//   const handleAddDepartment = () => {
//     if (isEditing) {
//       axios.put(`http://localhost:9096/departments/updateDepartment/${currentDepartmentId}`, { name }, {
//         headers: {
//           Authorization: `Bearer ${auth.token}`
//         }
//       })
//         .then(response => {
//           setDepartments(departments.map(department => department.id === currentDepartmentId ? response.data : department));
//           setIsEditing(false);
//           setName('');
//           setCurrentDepartmentId(null);
//         })
//         .catch(error => {
//           console.error('There was an error updating the department!', error);
//         });
//     } else {
//       axios.post('http://localhost:9096/departments/register', { name }, {
//         headers: {
//           Authorization: `Bearer ${auth.token}`
//         }
//       })
//         .then(response => {
//           setDepartments([...departments, response.data]);
//           setName('');
//         })
//         .catch(error => {
//           console.error('There was an error adding the department!', error);
//         });
//     }
//   };

//   const handleEditDepartment = (department) => {
//     setIsEditing(true);
//     setName(department.name);
//     setCurrentDepartmentId(department.id);
//   };

//   const handleDeleteDepartment = (id) => {
//     axios.delete(`http://localhost:9096/departments/deleteById/${id}`, {
//       headers: {
//         Authorization: `Bearer ${auth.token}`
//       }
//     })
//       .then(() => {
//         setDepartments(departments.filter(department => department.id !== id));
//       })
//       .catch(error => {
//         console.error('There was an error deleting the department!', error);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Department List</h2>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Department Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {departments.map(department => (
//             <tr key={department.id}>
//               <td>{department.id}</td>
//               <td>{department.name}</td>
//               <td>
//                 <button className="btn btn-primary" onClick={() => handleEditDepartment(department)}>Edit</button>
//                 <button className="btn btn-danger ml-2" onClick={() => handleDeleteDepartment(department.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="mt-5">
//         <h4>{isEditing ? 'Edit Department' : 'Add New Department'}</h4>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-success mt-2" onClick={handleAddDepartment}>
//           {isEditing ? 'Update' : 'Submit'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Department;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Modal, Button } from 'react-bootstrap';

const Department = () => {
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentDepartmentId, setCurrentDepartmentId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:9096/departments/getAll', {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
      .then(response => {
        setDepartments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the departments!', error);
      });
  }, [auth.token]);

  const handleAddDepartment = () => {
    if (isEditing) {
      axios.put(`http://localhost:9096/departments/updateDepartment/${currentDepartmentId}`, { name }, {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      })
        .then(response => {
          setDepartments(departments.map(department => department.id === currentDepartmentId ? response.data : department));
          setIsEditing(false);
          setName('');
          setCurrentDepartmentId(null);
          setShowModal(false);
        })
        .catch(error => {
          console.error('There was an error updating the department!', error);
        });
    } else {
      axios.post('http://localhost:9096/departments/register', { name }, {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      })
        .then(response => {
          setDepartments([...departments, response.data]);
          setName('');
          setShowModal(false);
        })
        .catch(error => {
          console.error('There was an error adding the department!', error);
        });
    }
  };

  const handleEditDepartment = (department) => {
    setIsEditing(true);
    setName(department.name);
    setCurrentDepartmentId(department.id);
    setShowModal(true);
  };

  const handleDeleteDepartment = (id) => {
    axios.delete(`http://localhost:9096/departments/deleteById/${id}`, {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    })
      .then(() => {
        setDepartments(departments.filter(department => department.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the department!', error);
      });
  };

  const handleShowModal = () => {
    setIsEditing(false);
    setName('');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h2>Department List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Department Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.name}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEditDepartment(department)}>Edit</button>
                <button className="btn btn-danger ml-2" onClick={() => handleDeleteDepartment(department.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-success mt-2" onClick={handleShowModal}>Add New Department</button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Department' : 'Add New Department'}</Modal.Title>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddDepartment}>
            {isEditing ? 'Update' : 'Submit'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Department;