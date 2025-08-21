import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace alert with real login logic if needed
    alert("Login functionality coming soon!");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <div className="card shadow-sm p-4 rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4"><b>LOGIN</b></h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label"><b>Email</b></label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label"><b>Password</b></label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">Login</button>
        </form>
        {/* <div className="text-center mt-3">
          <p className="mb-0">Don't have an account? <a href="/register" className="text-decoration-none">Register</a></p>
              </div>
        <div className="text-center mt-2">  
          <p className="mb-0">Forgot your password? <a href="/reset-password" className="text-decoration-none">Reset it</a></p>
            </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
