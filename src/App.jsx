import './App.css';
import Hospital from './Bookings/Hospital';
import Depatment from './Bookings/Depatment';
import { Link, Route, Routes } from 'react-router-dom';
import Registration from './Bookings/Registration';
import Home from './Bookings/Home';
import { AuthProvider } from './AuthContext';
import Signin from './Bookings/Signin';
import BookAppointment from './Bookings/BookAppointment';
import BookingDetails from './Bookings/BookingDetails';

function App() {
  return (
    <div align="center">
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <div class="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/registration">Registration</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/bookAppointment">BookAppoinment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/hospital">Hospital</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/department">Depatment</Link></li> 
            <li className="nav-item"><Link className="nav-link" to="/booking">Booking Details</Link></li>
          </ul>
        </div>
      </nav>
      <AuthProvider>
      <Routes>
      <Route path="/" Component={Home}> </Route>
        <Route path="/login" Component={Signin}> </Route>
        <Route path="/registration" Component={Registration}> </Route>
        <Route path="/bookAppointment" Component={BookAppointment}> </Route>
        <Route path="/home" Component={Home}> </Route>
        <Route path="/hospital" Component={Hospital}> </Route>
        <Route path="/booking" Component={BookingDetails}> </Route>
        <Route path="/department" Component={Depatment}> </Route>
      </Routes>
      </AuthProvider>
 
    </div>
  );
}
 
export default App;

// import React, { useContext } from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
// import { AuthProvider, AuthContext } from './AuthContext';
// import Hospital from './Bookings/Hospital';
// import Department from './Bookings/Depatment';
// import Registration from './Bookings/Registration';
// import Home from './Bookings/Home';
// import Signin from './Bookings/Signin';
// import BookAppointment from './Bookings/BookAppointment';
// import BookingDetails from './Bookings/BookingDetails';

// function App() {
//   const { auth } = useContext(AuthContext);

//   return (
//     <div align="center">
//       <nav className="navbar navbar-expand-sm bg-light navbar-light">
//         <div className="container-fluid">
//           <ul className="navbar-nav">
//             <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/registration">Registration</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/bookAppointment">Book Appointment</Link></li>
//             {auth.role === 'ADMIN' && (
//               <>
//                 <li className="nav-item"><Link className="nav-link" to="/hospital">Hospital</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/department">Department</Link></li>
//               </>
//             )}
//             <li className="nav-item"><Link className="nav-link" to="/booking">Booking Details</Link></li>
//           </ul>
//         </div>
//       </nav>
//       <AuthProvider>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Signin />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/bookAppointment" element={<BookAppointment />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/hospital" element={<Hospital />} />
//           <Route path="/booking" element={<BookingDetails />} />
//           <Route path="/department" element={<Department />} />
//         </Routes>
//       </AuthProvider>
//     </div>
//   );
// }

// export default App;