
import "bootstrap/dist/css/bootstrap.min.css";
import ModernForm from "./components/Form";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PaymentForm from "./components/Payment";
import PaymentStatus from "./components/PaymentStatus";
import Update from "./components/Update";
import UpdateStatus from "./components/UpdateStatus";
import TrainSearch from "./components/Train";
import RegisterStatus from "./components/RegisterStatus";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DashboardNew from "./components/DashboardNew";
import Error from "./components/Error";
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
          <Route path="/update-profile" element={<Update/>}/>
          <Route path="/update-status" element={<UpdateStatus/>}/>
          <Route path="/register-status" element={<RegisterStatus/>}/>
          <Route path="/rail" element={<TrainSearch/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/dashboard-new" elemnt={<DashboardNew/>}/>
          <Route path="/error" element={<Error/>}/>
        </Routes>
      </Router>
     
    </>
  );
}

export default App
