import React, { useState } from "react";
import "./PaymentForm.css";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";
import HeaderLogin from "./HeaderLogin";

const PaymentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: "",
    cvv: "",
    paymentStatus: "Pending",
    userId: "",
    nameOnCard: "",
    expiryDate: "",
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
    // Add your API call to save data here
    navigate("/payment-status");

    console.log(formData);
  };

  return (
    <>
   <HeaderLogin/>

      <div className="payment-form-container">
        <h2>Payment Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              placeholder="Enter your card number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="nameOnCard">Name on Card</label>
            <input
              type="text"
              id="nameOnCard"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleChange}
              required
              placeholder="Enter the name on your card"
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="month"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
            <small>Format: MM/YYYY</small>
          </div> */}

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              placeholder="Enter your CVV"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">PRICE</label>
            <input
              type="numer"
              id="price"
              name="price"
              value={500}
              onChange={handleChange}
              required
              placeholder="500"
            />
          </div>

          {/* <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
            placeholder="Enter your user ID"
          />
        </div> */}

          <button type="submit" className="submit-btn">
            Submit Payment
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default PaymentForm;
