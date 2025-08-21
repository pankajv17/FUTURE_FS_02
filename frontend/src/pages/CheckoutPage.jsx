import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { dispatch } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (Object.values(form).some((val) => val === "")) {
      alert("Please fill in all fields");
      return;
    }

    setSubmitted(true);
    dispatch({ type: "CLEAR_CART" });
  };

  if (submitted) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="mb-3">Order Successful!</h2>
        <p>Thank you, {form.name}. Your order has been placed.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Checkout</h2>

      <form
        onSubmit={handleSubmit}
        className="p-4 shadow-sm rounded-4 bg-white"
      >
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={form.city}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">ZIP Code</label>
            <input
              type="text"
              name="zip"
              className="form-control"
              value={form.zip}
              onChange={handleChange}
            />
          </div>

          <div className="col-12 mt-3">
            <button className="btn btn-success w-100" type="submit">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
