import { FaUsers, FaMoneyBillWave, FaUniversity } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setStartCount(inView);
  }, [inView]);

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-3 text-center">
        <div className="bg-[#121212] p-8 rounded-xl shadow-md hover:scale-105 transition">
          <FaUsers className="text-purple-500 text-4xl mx-auto mb-4" />
          <h3 className="text-3xl font-bold">
            {startCount ? <CountUp end={453} duration={2} /> : 0}+
          </h3>
          <p className="mt-2 text-gray-300">Daily Clients</p>
        </div>

        <div className="bg-[#121212] p-8 rounded-xl shadow-md hover:scale-105 transition">
          <FaMoneyBillWave className="text-purple-500 text-4xl mx-auto mb-4" />
          <h3 className="text-3xl font-bold">
            {startCount ? <CountUp end={362849} duration={3} separator="," /> : 0}+
          </h3>
          <p className="mt-2 text-gray-300">Our Subscribers</p>
        </div>

        <div className="bg-[#121212] p-8 rounded-xl shadow-md hover:scale-105 transition">
          <FaUniversity className="text-purple-500 text-4xl mx-auto mb-4" />
          <h3 className="text-3xl font-bold">
            {startCount ? <CountUp end={450000000} duration={3} separator="," /> : 0}Cr+
          </h3>
          <p className="mt-2 text-gray-300">Assets Tracked</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
