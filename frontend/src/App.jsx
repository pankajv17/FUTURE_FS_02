import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100%" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <div className="flex-grow-1"></div>
      {/* Footer should always be at the bottom */}
      <Footer />
<div
  className="toast-container position-fixed bottom-0 end-0 p-3"
  id="toastPlacement"
>
  <div
    id="cartToast"
    className="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div className="toast-body">
      ✅ Added to cart
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
