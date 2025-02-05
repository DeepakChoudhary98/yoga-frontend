
import "bootstrap/dist/css/bootstrap.min.css";
import ModernForm from "./components/Form";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PaymentForm from "./components/Payment";
import PaymentStatus from "./components/PaymentStatus";
import Update from "./components/Update";
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} /> */}
          <Route path="/signup" element={<ModernForm />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/payment-status" element={<PaymentStatus />} />
          <Route path="/update" element={<Update/>}/>
        </Routes>
      </Router>
     
    </>
  );
}

export default App
