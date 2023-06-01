import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <a className="text-white" href="#">Home</a>
          </li>
          <li className="list-inline-item">
            <a className="text-white" href="#">About</a>
          </li>
          <li className="list-inline-item">
            <a className="text-white" href="#">Services</a>
          </li>
          <li className="list-inline-item">
            <a className="text-white" href="#">News</a>
          </li>
          <li className="list-inline-item">
            <a className="text-white" href="#">Contact</a>
          </li>
        </ul>
        <p className="mb-0">© 2023 Company, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
