import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-container"> */}
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-img"></img>
          <h2 className="logo-text"> CRUD Dashboard</h2>
        </div>
        <ul className="navlinks">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              {" "}
              Login{" "}
            </Link>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
