import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import AboutSection from "./AboutSection";
import Navbar from "../Navbar";
import ProcessSection from "./ProcessSection";
import TestimonialSection from "./TestimonialSection";
import BlogSection from "./BlogeSection";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <>
      <div className="main-wrapper">
        <Navbar />
        <HeroSection />
      </div>
      <ServiceSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialSection />
      <BlogSection />
      <ContactForm />
    </>
  );
};

export default Home;
