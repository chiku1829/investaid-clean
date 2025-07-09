import React from "react";

const Payment: React.FC = () => {
  return (
    <section id="payment" className="bg-white py-12 px-4 text-center shadow-md rounded-lg max-w-xl mx-auto mt-12">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Make a Payment</h2>
      <p className="mb-4 text-gray-600">Scan the QR code below to make a secure payment:</p>
      
      <div className="flex justify-center mb-4">
        <img
          src="/assets/upi-qr-code.jpg"
          alt="UPI QR Code"
          className="h-64 w-64 object-contain border-2 border-purple-700 p-2 rounded-lg"
        />
      </div>

      <p className="text-lg font-medium mb-2">Or Pay using UPI ID:</p>
      <p className="text-purple-700 text-xl font-bold mb-6">veergondnaik@okicici</p>

      <h3 className="text-xl font-semibold mb-2">Bank Account Details</h3>
      <div className="text-gray-700 space-y-1">
        <p><strong>Account Holder:</strong> VeerICICI</p>
        <p><strong>Bank:</strong> ICICI Bank</p>
        <p><strong>Account Number:</strong>SBA-232201507172</p>
        <p><strong>IFSC Code:</strong>ICIC0002322</p>
        <p><strong>BRANCH LOCATION :</strong>KSRTC LAYOUT, JP NAGAR, BANGALORE</p>
      </div>
    </section>
  );
};

export default Payment;
