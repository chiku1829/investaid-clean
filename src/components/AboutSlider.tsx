import Slider from "react-slick";
import { FaUsers, FaClock, FaChartLine, FaShieldAlt } from "react-icons/fa";

const slides = [
  {
    icon: <FaChartLine size={50} className="text-purple-600" />,
    title: "Research",
    desc: "All Our Research views are backed by analysis and data as we believe that will give consistent results."
  },
  {
    icon: <FaUsers size={50} className="text-purple-600" />,
    title: "Customer Focus",
    desc: "An absolute focus on the customer’s best interest by aspiring to meet their financial objectives."
  },
  {
    icon: <FaClock size={50} className="text-purple-600" />,
    title: "Live Support Team",
    desc: "Our Support Team Always On 24×7 For Research and Support."
  },
  {
    icon: <FaShieldAlt size={50} className="text-purple-600" />,
    title: "Risk Management",
    desc: "A Robust risk management plan to ensure customers can get the best out of our offerings."
  }
];

const AboutSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <section className="flex flex-col lg:flex-row items-stretch bg-white">
      {/* Left Black Box */}
      <div className="bg-black text-white p-10 lg:w-1/2 flex flex-col justify-center">
        <p className="text-purple-500 text-sm mb-2 uppercase">We Provide</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Stock Tips <span className="text-purple-500">with</span><br />
          our experienced Research Team and Resources
        </h2>
      </div>

      {/* Right Slider Section */}
      <div className="bg-white p-10 lg:w-1/2">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-6 transition-transform transform hover:scale-105 duration-300"
            >
              <div className="mb-4">{slide.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-2">
                {slide.title}
              </h3>
              <p className="text-lg text-gray-700 font-medium">{slide.desc}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AboutSlider;
