import React from "react";
import InfoBar from "./InfoBar";
import Navbar from "./Navbar";
// import MarqueeBar from "./MarqueeBar"; ❌ not used
import Hero from "./Hero";
import About from "./About";
import Stats from "./Stats";
import AboutSlider from "../components/AboutSlider";
import WhyChooseUs from "./WhyChooseUs";
import DarkFooter from "../components/DarkFooter";
import Services from "./services";

const Home: React.FC = () => {
  return (
    <div className="font-sans">
      <InfoBar />
      <Navbar />
      <Hero />
      <About />
      <AboutSlider />
      <div id="services">
        <Services />
      </div>
      <Stats />
      <WhyChooseUs />
      <DarkFooter />
    </div>
  );
};

export default Home;
