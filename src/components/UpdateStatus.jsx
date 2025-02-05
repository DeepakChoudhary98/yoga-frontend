import "./PaymentSuccess.css";

const UpdateStatus = () => {
  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <h1>Details Updated Successful</h1>
        <p>Your details has been successfully Updated.</p>
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

export default UpdateStatus;
