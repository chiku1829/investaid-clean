import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/about-us.webp"
            alt="About One Street"
            className="rounded-xl shadow-md w-full"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At One Street, we empower individuals and businesses with expert investment insights,
            real-time market analysis, and tailored financial strategies.
          </p>

          {/* Features List */}
          <ul className="space-y-4 mb-6">
            <li className="flex items-center text-gray-800 text-lg">
              <span className="text-green-600 text-2xl mr-3">✔️</span>
              Live Support Team
            </li>
            <li className="flex items-center text-gray-800 text-lg">
              <span className="text-green-600 text-2xl mr-3">✔️</span>
              Daily Performance Sheet
            </li>
            <li className="flex items-center text-gray-800 text-lg">
              <span className="text-green-600 text-2xl mr-3">✔️</span>
              Expert Research Team
            </li>
            <li className="flex items-center text-gray-800 text-lg">
              <span className="text-green-600 text-2xl mr-3">✔️</span>
              Instant Call Support
            </li>
          </ul>

          {/* Read More Button */}
          <Link
            to="/about"
            className="mt-2 inline-block px-5 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
