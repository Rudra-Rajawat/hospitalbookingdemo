import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Navigation= () => {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const logoutHandler = () => {
      // Clear authentication details from context (and localStorage if needed)
      setAuth({});
      localStorage.removeItem('patientId');
      // Redirect to login page
      navigate('/home');
    };
  
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            {auth && auth.token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/booking">
                    Booking Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bookAppointment">
                    Book Appointment
                  </Link>
                </li>
                {auth.role === 'ADMIN' && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/hospital">
                        Hospital
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/department">
                        Department
                      </Link>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={logoutHandler}
                    style={{ cursor: 'pointer' }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registration">
                    Registration
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }

  export default Navigation;