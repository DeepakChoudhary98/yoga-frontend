// import React, { useState } from "react";
// import "./PaymentForm.css";
// import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";
// import HeaderLogin from "./HeaderLogin";
// import axios from "axios";

// const PaymentForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     cardNumber: "",
//     cvv: "",
//     paymentStatus: "Pending",
//     userId: "",
//     nameOnCard: "",
//     expiryDate: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       navigate('/payment-status');

//       try {
//         // Send payment data to backend API
//         const response = await axios.post(
//           "http://localhost:3000/api/payment",
//           formData
//         );

//         if (response.status === 200) {
//           // Assuming backend sends a success status
//           navigate("/payment-status", { state: { formData: response.data } });
//         } else {
//           console.log("Payment failed", response.data);
//         }
//       } catch (error) {
//         console.error("Error during payment", error);
//       }
//     };


// //    const navigate = useNavigate();
// //    const [formData, setFormData] = useState({
// //      cardNumber: "",
// //      cvv: "",
// //      nameOnCard: "",
// //      expiryDate: "",
// //      price: 500,
// //    });

// //    const [userId, setUserId] = useState("");
// //    const [isPaid, setIsPaid] = useState(false);

// //    useEffect(() => {
// //      // Fetch user ID from localStorage (assuming user is logged in)
// //      const storedUserId = localStorage.getItem("userId");
// //      if (!storedUserId) {
// //        navigate("/login"); // Redirect to login if not authenticated
// //        return;
// //      }
// //      setUserId(storedUserId);

// //      // Check if user has already paid
// //      const checkPaymentStatus = async () => {
// //        try {
// //          const response = await axios.get(
// //            `http://localhost:3000/payment-status/${storedUserId}`
// //          );
// //          if (response.data.paid) {
// //            setIsPaid(true);
// //          }
// //        } catch (error) {
// //          console.error("Error checking payment status:", error);
// //        }
// //      };

// //      checkPaymentStatus();
// //    }, [navigate]);

// //    const handleChange = (e) => {
// //      const { name, value } = e.target;
// //      setFormData({
// //        ...formData,
// //        [name]: value,
// //      });
// //    };

// //    const handleSubmit = async (e) => {
// //      e.preventDefault();

// //      if (isPaid) {
// //        navigate("/already-paid");
// //        return;
// //      }

// //      try {
// //        const response = await axios.post("http://localhost:3000/payment", {
// //          ...formData,
// //          userId,
// //        });

// //        if (response.status === 200) {
// //          navigate("/payment-completed", { state: { formData: response.data } });
// //        } else {
// //          console.log("Payment failed", response.data);
// //        }
// //      } catch (error) {
// //        console.error("Error during payment:", error);
// //      }
// //    };

// //    if (isPaid) {
// //      return navigate("/already-paid");
// //    }

//   return (
//     <>
//       <HeaderLogin />
//       <div className="payment-form-container">
//         <h2>Payment Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="cardNumber">Card Number</label>
//             <input
//               type="text"
//               id="cardNumber"
//               name="cardNumber"
//               value={formData.cardNumber}
//               onChange={handleChange}
//               required
//               placeholder="Enter your card number"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="nameOnCard">Name on Card</label>
//             <input
//               type="text"
//               id="nameOnCard"
//               name="nameOnCard"
//               value={formData.nameOnCard}
//               onChange={handleChange}
//               required
//               placeholder="Enter the name on your card"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="cvv">CVV</label>
//             <input
//               type="text"
//               id="cvv"
//               name="cvv"
//               value={formData.cvv}
//               onChange={handleChange}
//               required
//               placeholder="Enter your CVV"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="price">PRICE</label>
//             <input
//               type="text"
//               id="price"
//               name="price"
//               value={500}
//               onChange={handleChange}
//               required
//               placeholder="500"
//             />
//           </div>

//           <button type="submit" className="submit-btn">
//             Submit Payment
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PaymentForm;





















import React, { useState } from "react";
import "./PaymentForm.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import HeaderLogin from "./HeaderLogin";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/payment-status");

    try {
      // Send payment data to backend API
      const response = await axios.post(
        "http://localhost:3000/api/payment",
        formData
      );

      if (response.status === 200) {
        // Assuming backend sends a success status
        navigate("/payment-status", { state: { formData: response.data } });
      } else {
        console.log("Payment failed", response.data);
      }
    } catch (error) {
      console.error("Error during payment", error);
    }
  };

  //    const navigate = useNavigate();
  //    const [formData, setFormData] = useState({
  //      cardNumber: "",
  //      cvv: "",
  //      nameOnCard: "",
  //      expiryDate: "",
  //      price: 500,
  //    });

  //    const [userId, setUserId] = useState("");
  //    const [isPaid, setIsPaid] = useState(false);

  //    useEffect(() => {
  //      // Fetch user ID from localStorage (assuming user is logged in)
  //      const storedUserId = localStorage.getItem("userId");
  //      if (!storedUserId) {
  //        navigate("/login"); // Redirect to login if not authenticated
  //        return;
  //      }
  //      setUserId(storedUserId);

  //      // Check if user has already paid
  //      const checkPaymentStatus = async () => {
  //        try {
  //          const response = await axios.get(
  //            `http://localhost:3000/payment-status/${storedUserId}`
  //          );
  //          if (response.data.paid) {
  //            setIsPaid(true);
  //          }
  //        } catch (error) {
  //          console.error("Error checking payment status:", error);
  //        }
  //      };

  //      checkPaymentStatus();
  //    }, [navigate]);

  //    const handleChange = (e) => {
  //      const { name, value } = e.target;
  //      setFormData({
  //        ...formData,
  //        [name]: value,
  //      });
  //    };

  //    const handleSubmit = async (e) => {
  //      e.preventDefault();

  //      if (isPaid) {
  //        navigate("/already-paid");
  //        return;
  //      }

  //      try {
  //        const response = await axios.post("http://localhost:3000/payment", {
  //          ...formData,
  //          userId,
  //        });

  //        if (response.status === 200) {
  //          navigate("/payment-completed", { state: { formData: response.data } });
  //        } else {
  //          console.log("Payment failed", response.data);
  //        }
  //      } catch (error) {
  //        console.error("Error during payment:", error);
  //      }
  //    };

  //    if (isPaid) {
  //      return navigate("/already-paid");
  //    }

  return (
    <>
      <HeaderLogin />
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
              type="text"
              id="price"
              name="price"
              value={500}
              onChange={handleChange}
              required
              placeholder="500"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Payment
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PaymentForm;
