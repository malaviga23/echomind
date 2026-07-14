import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { registerUser } from "../../services/authservice";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    role: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const data = await registerUser(formData);

    alert(data.message);

  } catch (error) {

    console.log(error);
    alert("Registration Failed");

  }
};
  return (
    
  <div className="register-container">

    <div className="auth-header">
      <Link to="/" className="brand-link">
        <img src="/logo.png" alt="EchoMind Logo" />

        <h2>
          <span className="echo">Echo</span>
          <span className="mind">Mind</span>
        </h2>
      </Link>
    </div>

    <div className="register-box">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="role"
            placeholder="Role"
            onChange={handleChange}
            required
          />

          <button>Create Account</button>

        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;