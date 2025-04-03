import React from 'react';
import '../styles/_hero-section.scss';

const HeroSection = () => (
  <section className="hero-section">
    <div className="text-content">
      <h1>HOW MUCH <br /> COULD YOU SAVE?</h1>
      <p>Answer the questions below to get a fixed price quotation for us to take your accountancy hassles away from you.</p>

      <div className="question-box">
        <p>Is your turnover expected to be more than £85k?</p>
        <div className="buttons">
          <button className="yes-btn">Yes</button>
          <button className="no-btn">No</button>
        </div>
        <small>Takes less than 30 seconds</small>
      </div>
    </div>

    <div className="graphic-area">
      {/* You can use an illustration SVG/PNG here */}
    </div>
  </section>
);

export default HeroSection;
