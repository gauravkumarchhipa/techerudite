import React from "react";
import "./styles/index.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="main-wrapper">
        <Navbar />
        <HeroSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
