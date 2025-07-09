import { motion } from "framer-motion";

const chooseUsItems = [
  {
    title: "Over 40+ years",
    subtitle: "of combined corporate experience."
  },
  {
    title: "Committed to serve",
    subtitle: "the customers, going the extra mile."
  },
  {
    title: "Regular updates",
    subtitle: "from us in a structured format and routine."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-black">Why Choose us</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 relative">
        {chooseUsItems.map((item, index) => (
          <motion.div
  key={index}
  className="group relative w-64 h-64 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center p-6 cursor-pointer hover:bg-purple-600"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
>
  {/* Small circle */}
  <div className="absolute top-4 right-4 w-14 h-14 bg-purple-600 text-white font-bold text-sm rounded-full border-4 border-dashed border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-purple-600">
    100%
  </div>

  {/* Title & Subtitle */}
  <h3 className="text-xl font-semibold text-black group-hover:text-white mb-2 transition-colors duration-300">
    {item.title}
  </h3>
  <p className="text-gray-600 group-hover:text-white text-sm transition-colors duration-300">
    {item.subtitle}
  </p>
</motion.div>

        ))}

        </div>
    </section>
  );
};

export default WhyChooseUs;
