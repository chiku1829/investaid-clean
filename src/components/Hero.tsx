import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => setActiveSlide(current),
  };

  const slides = [
    {
      image: "/side1.webp",
      heading: "Smart Investment Starts Here",
      text: "Your partner in financial growth and wealth management.",
    },
    {
      image: "/slide2.webp",
      heading: "Real-Time Market Insights",
      text: "Stay ahead with our expert stock recommendations.",
    },
    {
      image: "/slide3.webp",
      heading: "Grow with Confidence",
      text: "Data-driven decisions for long-term returns.",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={activeSlide === index ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="h-[75vh] flex flex-col items-center justify-center bg-cover bg-center text-white text-center px-4"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={activeSlide === index ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-black bg-opacity-50 px-4 py-2 rounded"
            >
              {slide.heading}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={activeSlide === index ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl bg-black bg-opacity-40 px-6 py-2 rounded"
            >
              {slide.text}
            </motion.p>
          </motion.div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
