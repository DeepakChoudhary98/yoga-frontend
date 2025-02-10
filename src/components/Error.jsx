const Error = () => {
  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <h1>Something Went Wrong...</h1>
        <p>Please Try again.</p>
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

export default Error;
