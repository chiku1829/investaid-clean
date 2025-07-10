import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/investaid-logo.png"
            alt="Investaid Logo"
            className="h-16 w-auto drop-shadow-md"
          />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-purple-800 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-purple-700">Home</Link>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-purple-700">About Us</a>
          <div>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full text-left text-gray-700 hover:text-purple-700"
            >
              Services ▾
            </button>
            {showDropdown && (
              <div className="ml-4">
                <Link to="/services#equity-cash" onClick={() => { setShowDropdown(false); setMobileMenuOpen(false); }} className="block py-1">Equity Cash</Link>
                <Link to="/services#equity-future" onClick={() => { setShowDropdown(false); setMobileMenuOpen(false); }} className="block py-1">Equity Future</Link>
                <Link to="/services#equity-option" onClick={() => { setShowDropdown(false); setMobileMenuOpen(false); }} className="block py-1">Equity Option</Link>
                <Link to="/services#btst" onClick={() => { setShowDropdown(false); setMobileMenuOpen(false); }} className="block py-1">BTST</Link>
                <Link to="/services#swing-trade" onClick={() => { setShowDropdown(false); setMobileMenuOpen(false); }} className="block py-1">Swing Trade</Link>
                <Link to="/services#delivery" onClick={() => { setShowDropdown(false); setMobileMenuOpen(false); }} className="block py-1">Equity Delivery</Link>
              </div>
            )}
          </div>
          <Link to="/reports" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-purple-700">Download Reports</Link>
          <Link to="/payment" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-purple-700">Payment</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-purple-700">Contact Us</Link>
          {isLoggedIn ? (
            <button
              onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-full shadow-md"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-full shadow-md"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
