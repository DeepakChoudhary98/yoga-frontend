import React, { useState } from "react";
import "../App.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
const UpdateForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    month: "",
    batch: "",
    year: "",
    paymentId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., API call or navigating
    console.log(formData);
    navigate("/payment");
  };

  return (
    <>
      <HeaderLogin />

      <div className="form-container margin-form bg-color">
        <div className="form-wrapper">
          <h2 className="form-title">Update Details</h2>
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="form-input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="month" className="form-label">
                Month
              </label>
              <input
                id="month"
                type="text"
                className="form-input"
                name="month"
                value={formData.month}
                onChange={handleChange}
              />
            </div> */}
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
              >
                <option value="">Select Batch</option>
                <option value="Batch 1">6-7 AM</option>
                <option value="Batch 1">7-8 AM</option>
                <option value="Batch 1">8-9 AM</option>
                <option value="Batch 2">5-6 PM</option>
              </select>
            </div>
            {/* <div className="form-group">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                id="year"
                type="number"
                className="form-input"
                name="year"
                value={formData.year}
                onChange={handleChange}
              />
            </div> */}

            <div className="form-submit">
              <button type="submit" className="submit-btn">
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
