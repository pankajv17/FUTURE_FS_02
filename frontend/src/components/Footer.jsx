import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

const Footer = () => (
  <footer className="bg-dark text-light py-3 mt-4">
    <div className="container text-center">
      {/* <div className="mb-2">
        <Link to="/" className="text-light text-decoration-none">Home</Link> | 
        <Link to="/cart" className="text-light text-decoration-none ms-2">Cart</Link> | 
        <Link to="/checkout" className="text-light text-decoration-none ms-2">Checkout</Link> | 
        <Link to="/login" className="text-light text-decoration-none ms-2">Login</Link>
      </div> */}
      <div className="mb-2">
        <Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link> | 
        <Link to="/terms" className="text-light text-decoration-none ms-2">Terms of Service</Link>
      </div>

      <div className="small">
        © 2025 MiniShop. All Rights Reserved.
      </div>
      
      
    </div>
  </footer>
);

export default Footer;
