import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>We are a leading online retailer providing a wide range of products to our customers.</p>
        </div>
        <div className="footer__section">
          <h3>Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>Shipping Information</li>
            <li>Returns & Exchanges</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Categories</h3>
          <ul>
            <li>Electronics</li>
            <li>Books</li>
            <li>Clothing</li>
            <li>Home & Garden</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
