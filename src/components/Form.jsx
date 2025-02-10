import React, { useState } from "react";
import "../App.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const UpdateForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    batch: "",
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
    console.log("in submitting");

    try {
      console.log(formData);
     // console.log(JSON.stringify(formData));
      // const response = await axios.post(
      //   "http://localhost:4000/api/user/register",
      //   formData
      // );
// const response = await axios.post(
//   "http://localhost:4000/api/user/register",
//   {
//     name: formData.name,
//     age: formData.age,
//     email: formData.email,
//     password: formData.password,
//     batch: formData.batch,
//   }
// );
//console.log(response.data);

navigate("/dashboard");
      console.log(response.data);

      if (response.status === 200) {
        console.log("Update successful", response.data);
        navigate('/login');
        navigate("/update-status");
      } else {
        console.log("Update failed", response.data);
      }
    } catch (error) {
      console.error("Error during update", error);
    }
  };

  return (
    <>
      <Header />
      <div className="form-container margin-form bg-color">
        <div className="form-wrapper">
          <h2 className="form-title">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="form-input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                id="age"
                type="number"
                className="form-input"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
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
                required
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
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="batch" className="form-label">
                Batch
              </label>
              <select
                id="batch"
                className="form-input"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                required
              >
                <option value="">Select Batch</option>
                <option value="6-7AM">6-7AM</option>
                <option value="7-8AM">7-8AM</option>
                <option value="8-9AM">8-9AM</option>
                <option value="5-6PM">5-6PM</option>
              </select>
            </div>
            <div className="form-submit">
              <button type="submit" className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateForm;
