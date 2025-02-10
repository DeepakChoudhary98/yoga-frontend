import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardNew = () => {
  const navigate = useNavigate();
  const [hasPaid, setHasPaid] = useState(null);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail"); // Assuming email is stored in localStorage
        if (!userEmail) return;
        const response = await axios.post("/api/payment/status", {
          email: userEmail,
        });
        setHasPaid(response.data.hasPaid);
      } catch (error) {
        console.error("Error fetching payment status", error);
      }
    };
    fetchPaymentStatus();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dashboard</h2>
      <div className="d-flex justify-content-center">
        {hasPaid === null ? (
          <p>Loading payment status...</p>
        ) : hasPaid ? (
          <p className="text-success">You have already paid for this month.</p>
        ) : (
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/payment")}
          >
            Make Payment
          </button>
        )}
        <button
          className="btn btn-secondary mx-2"
          onClick={() => navigate("/update-profile")}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default DashboardNew;
