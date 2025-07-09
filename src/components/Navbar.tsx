import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const isLoggedIn = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/investaid-logo.png"
            alt="Investaid Logo"
            className="h-20 w-auto drop-shadow-md"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-gray-700 hover:text-purple-700 transition">Home</Link>
          <a href="#about" className="text-gray-700 hover:text-purple-700 transition">About Us</a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-gray-700 hover:text-purple-700 transition focus:outline-none"
            >
              Services ▾
            </button>
            {showDropdown && (
              <ul className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 shadow-md rounded-md z-50">
                <li><Link to="/services#equity-cash" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-gray-100">Equity Cash</Link></li>
                <li><Link to="/services#equity-future" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-gray-100">Equity Future</Link></li>
                <li><Link to="/services#equity-option" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-gray-100">Equity Option</Link></li>
                <li><Link to="/services#btst" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-gray-100">BTST</Link></li>
                <li><Link to="/services#swing-trade" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-gray-100">Swing Trade</Link></li>
                <li><Link to="/services#delivery" onClick={() => setShowDropdown(false)} className="block px-4 py-2 hover:bg-gray-100">Equity Delivery</Link></li>
              </ul>
            )}
          </div>

          <Link to="/reports" className="text-gray-700 hover:text-purple-700 transition">Download Reports</Link>
          <Link to="/payment" className="text-gray-700 hover:text-purple-700 transition">Payment</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-700 transition">Contact Us</Link>

          {/* Conditional Login/Logout */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
