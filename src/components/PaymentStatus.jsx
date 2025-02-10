import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer"; // Make sure Footer is correctly imported
import "./PaymentSuccess.css";

const PaymentStatus = () => {
  const location = useLocation();
  // const { formData } = location.state || {}; // Safe destructuring
  const formData = location.state?.formData; // Ensure formData exists

  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <h1>Payment Successful!</h1>
        {formData ? (
          <div className="payment-details">
            <p>
              <strong>Card Number:</strong> {formData.cardNumber}
            </p>
            <p>
              <strong>Name on Card:</strong> {formData.nameOnCard}
            </p>
            <p>
              <strong>CVV:</strong> {formData.cvv}
            </p>
            <p>
              <strong>Price:</strong> ₹500
            </p>
          </div>
        ) : (
          <p>No payment details available.</p>
        )}
        <button
          className="go-home-btn"
          onClick={() => (window.location.href = "/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentStatus;
