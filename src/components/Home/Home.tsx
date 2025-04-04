import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import AboutSection from "./AboutSection";
import Navbar from "../Navbar";
import ProcessSection from "./ProcessSection";
import TestimonialSection from "./TestimonialSection";
import BlogSection from "./BlogeSection";
import ContactForm from "./ContactForm";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <div className="main-wrapper">
        <Navbar />
        <HeroSection />
      </div>
      <div id="services">
        <ServiceSection />
      </div>
      <div id="aboutus">
        <AboutSection />
      </div>
      <ProcessSection />
      <div id="cashstudy">
        <TestimonialSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
