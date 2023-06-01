import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" /> {/* Replace "logo.png" with the path to your logo image */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
  <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/services">Services</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/news">News</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">Contact</Link>
  </li>
</ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
