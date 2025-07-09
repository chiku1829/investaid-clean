import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // we’ll move homepage into this
import AboutFull from "./pages/AboutFull";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage"; // ✅
import Payment from "./components/Payment";
import Reports from "./pages/reports";
import Login from './pages/Login';
import Career from "./pages/Career";
import AddressPolicy from "./pages/AddressPolicy";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutFull />} />
      <Route path="/services" element={<ServicesPage />} /> {/* ✅ */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/login" element={<Login />} />
      <Route path="/career" element={<Career />} />
<Route path="/address-policy" element={<AddressPolicy />} />


    </Routes>
  );
};

export default App;

