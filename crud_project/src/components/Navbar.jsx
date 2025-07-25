import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import axios from "../api/axiosAuthInstance";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("/auth/logout"); 
      alert("Logged out successfully!");
      navigate("/"); 
    } catch (err) {
      alert("Failed to logout. Please try again.");
    }
  };
  return (
    <nav className="navbar">
      {/* <div className="navbar-container"> */}
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img"></img>
          <h2 className="logo-text"> Sign Off Data Maintainance-App</h2>
        </div>
        <ul className="navlinks">
          <li>
            <Link to="/dashboard" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="nav-link logout-button">
            Logout
          </button>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
