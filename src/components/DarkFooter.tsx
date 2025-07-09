import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const DarkFooter = () => {
  return (
    <footer className="bg-black text-white">
      {/* 🚨 Important Notice Marquee */}
      <div className="bg-purple-600 py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee text-sm text-white font-semibold">
          ⚠️ Dear customers, kindly do not make any payment in savings or personal UPI accounts. We are not responsible for any fraudulent activity if you make payment to such accounts.
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-purple-500">About Us</h4>
          <p className="text-sm text-gray-300">
            One Street is committed to helping investors make informed decisions with expert insights and market analysis.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-purple-500">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/career" className="hover:text-purple-400">Career</a></li>
            <li><a href="#about" className="hover:text-purple-400">About Us</a></li>
            <li><a href="/payment" className="hover:text-purple-400">Payment Details</a></li>
            <li><a href="/address-policy" className="hover:text-purple-400">Address Policy</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-purple-500">Get In Touch</h4>
          <p className="text-sm text-gray-300">📧 liquidbackoffice@gmail.com</p>
          <p className="text-sm text-gray-300 mt-1">📞 +91 98765 43210</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-purple-500">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-purple-400"><FaInstagram /></a>
            <a href="#" className="hover:text-purple-400"><FaLinkedin /></a>
            <a href="#" className="hover:text-purple-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} One Street. All rights reserved.
      </div>
    </footer>
  );
};

export default DarkFooter;
