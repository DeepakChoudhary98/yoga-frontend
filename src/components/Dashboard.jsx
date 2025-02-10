import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
// import HeaderLogin from "./HeaderLogin";
import HeaderNew from "./HeaderNew";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderNew />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Dashboard</h2>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/payment")}
          >
            Make Payment
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={() => navigate("/update-profile")}
          >
            Update Profile
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
