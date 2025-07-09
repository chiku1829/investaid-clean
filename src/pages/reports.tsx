import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const reports = [
  {
    title: "Equity Cash Report",
    description: "Hand-picked cash segment stocks for short-term profits.",
    file: "https://roaring-torrone-8eb474.netlify.app/Equity-Cash-Report.pdf",
    image: "/Equity-Cash.jpg",
  },
  {
    title: "Futures Market Outlook",
    description: "Weekly trends and trade setups in equity futures.",
    file: "https://roaring-torrone-8eb474.netlify.app/Futures-Market-Outlook.pdf",
    image: "/equity future.webp",
  },
  {
    title: "Options Trading Strategy",
    description: "Smart option strategies and expiry week opportunities.",
    file: "https://roaring-torrone-8eb474.netlify.app/Options-Trading-Strategy.pdf",
    image: "/Stock-options.jpg",
  },
  {
    title: "BTST Stock Alerts",
    description: "Buy Today, Sell Tomorrow — volume breakout stock ideas.",
    file: "https://roaring-torrone-8eb474.netlify.app/BTST-Stock-Alerts.pdf",
    image: "/btst.jpg",
  },
  {
    title: "Swing Trade Watchlist",
    description: "High-conviction swing trades with technical breakouts.",
    file: "https://roaring-torrone-8eb474.netlify.app/Swing-Trade-Watchlist.pdf",
    image: "/swing.jpg",
  },
  {
    title: "Delivery Portfolio Guide",
    description: "Top delivery stocks to hold for long-term gains.",
    file: "https://roaring-torrone-8eb474.netlify.app/Equity-Delivery-Portfolio-Guide.pdf",
    image: "/equity delivery.jpeg",
  },
];

const Reports = () => {
  const [isPaidUser, setIsPaidUser] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (user && user.isPaidUser) {
      setIsPaidUser(true);
    }
  }, []);

  const handleDownload = async (file: string) => {
    if (isPaidUser) {
      window.location.href = file;
    } else {
      const result = await Swal.fire({
        title: "Premium Access Only",
        text: "This report is available for paid users only.",
        icon: "warning",
        confirmButtonText: "Pay Now",
        showCancelButton: true,
        confirmButtonColor: "#6b21a8",
        cancelButtonColor: "#aaa",
      });

      if (result.isConfirmed) {
        // simulate payment by calling /pay
        try {
          const response = await fetch("https://backend-rj1g.onrender.com/pay", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user.email }),
          });

          const data = await response.json();
          if (data.success) {
            const updatedUser = { ...user, isPaidUser: true };
            localStorage.setItem("user", JSON.stringify(updatedUser));
            setIsPaidUser(true);

            Swal.fire("Success!", "Payment completed. You can now download reports.", "success");

            setTimeout(() => {
              window.location.href = file; // download after payment
            }, 1500);
          } else {
            Swal.fire("Error", data.message, "error");
          }
        } catch (error) {
          Swal.fire("Error", "Payment failed. Please try again later.", "error");
        }
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-2">Download Reports</h2>
      <p className="text-gray-600 mb-8 text-sm">Exclusive reports tailored to your subscription plan</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
          >
            <img
              src={report.image}
              alt={report.title}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{report.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{report.description}</p>

            <button
              onClick={() => handleDownload(report.file)}
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reports;
