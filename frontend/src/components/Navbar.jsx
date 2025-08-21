import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";


const Navbar = () => {
  const { state } = useCart();
  const cartCount = state.cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ...">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">MiniShop</Link>

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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold ">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/login">Login</Link>
            </li>
            <li className="nav-item position-relative ">
              <Link to="/cart " className="nav-link fw-bold">
                <i className="bi bi-cart-fill ms-1">Cart</i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
