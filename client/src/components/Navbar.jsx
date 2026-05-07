import { Link, useNavigate } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {

  const navigate = useNavigate();



  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/");
  };



  return (

    <nav className="navbar">

      <h2 className="logo">
        Team Task Manager
      </h2>



      <div className="nav-links">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/projects">
          Projects
        </Link>

        <Link to="/tasks">
          Tasks
        </Link>



        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;