import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import AboutSection from "./AboutSection";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <>
      <div className="main-wrapper">
        <Navbar />
        <HeroSection />
      </div>
      <ServiceSection />
      <AboutSection/>
    </>
  );
};

export default Home;
