import React from "react";
import "./PaymentSuccess.css";

const PaymentStatus = () => {
  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <h1>Payment Successful!</h1>
        <p>Your payment has been processed successfully.</p>
        <p>Thank you for your purchase!</p>
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
