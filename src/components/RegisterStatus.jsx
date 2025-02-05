



const RegisterStatus = () => {
   
    return (
      <div className="payment-success-container">
        <div className="payment-success-content">
          <h1>Registered Successfully</h1>
          <p>Thank You for Registering.</p>
          <button
            className="go-home-btn"
            onClick={() => (window.location.href = "/")}
          >
            Go to Home
          </button>
        </div>
      </div>
    );
}

export default RegisterStatus;