import React, { useState } from "react";
import "../App.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/dashboard');
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      // Redirect user to the dashboard or home page after login
      navigate("/dashboard"); // or another route
    }
      console.log(response.data);

      if (response.status === 200) {
        console.log("Login successful", response.data);
        navigate("/dashboard");
      } else {
        console.log("Login failed", response.data);
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <>
      <HeaderLogin />
      <div className="form-container margin-form bg-color">
        <div className="form-wrapper">
          <h2 className="form-title">Login</h2>
          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-submit">
              <button type="submit" className="submit-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
