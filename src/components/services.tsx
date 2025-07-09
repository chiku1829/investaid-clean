// components/Services.tsx
const services = [
  {
    id: "equity-cash",
    title: "Equity Cash",
    subtitle: "Intraday Trading",
    image: "/Equity-Cash.jpg",
    description: "Buy/sell shares within the same trading day with low margin and fast execution.",
    price: "₹6700/- including GST - 39 days",
  },
  {
    id: "equity-future",
    title: "Equity Future",
    subtitle: "Derivatives",
    image: "/equity future.webp",
    description: "Trade contracts to buy/sell stocks at a future date with leverage.",
    price: "₹23600/- including GST - 39 days",
  },
  {
    id: "equity-option",
    title: "Equity Option",
    subtitle: "Derivatives",
    image: "/Stock-options.jpg",
    description: "Options trading for hedging or speculation with defined risk.",
    price: "₹17700/- including GST - 39 days",
  },
  {
    id: "btst",
    title: "BTST - Equity Cash",
    subtitle: "Short-Term Trading",
    image: "/btst.jpg",
    description: "Buy today and sell tomorrow for returns before shares hit your Demat.",
    price: "",
  },
  {
    id: "swing-trade",
    title: "Swing Trade - Equity Trade",
    subtitle: "Technical Strategy",
    image: "/swing.jpg",
    description: "Hold stocks for a few days to capture momentum from price swings.",
    price: "",
  },
  {
    id: "delivery",
    title: "Equity Delivery",
    subtitle: "Long-Term Investing",
    image: "/equity delivery.jpeg",
    description: "Hold shares for long-term wealth creation and dividends.",
    price: "",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            id={service.id}
            key={service.id}
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 scroll-mt-32"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h4 className="text-lg font-semibold text-purple-600">{service.title}</h4>
              <p className="text-sm text-gray-500 mb-2 italic">{service.subtitle}</p>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>

              {/* Price Box */}
              <div className="bg-purple-600 text-white font-semibold text-center py-2 rounded-lg">
                {service.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
