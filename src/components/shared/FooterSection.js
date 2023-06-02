import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <Link className="text-white" to="/">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link className="text-white" to="/about">About</Link>
          </li>
          <li className="list-inline-item">
            <Link className="text-white" to="/services">Services</Link>
          </li>
          <li className="list-inline-item">
            <Link className="text-white" to="/news">News</Link>
          </li>
          <li className="list-inline-item">
            <Link className="text-white" to="/contact">Contact</Link>
          </li>
        </ul>
        <p className="mb-0">© 2023 Company, all rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
