// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Stonepedia. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-right">
            <a href="https://facebook.com" className="text-dark">Facebook</a> | 
            <a href="https://twitter.com" className="text-dark">Twitter</a> | 
            <a href="https://instagram.com" className="text-dark">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
