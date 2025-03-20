import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure the CSS file is correctly linked

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">FlashCard App</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

