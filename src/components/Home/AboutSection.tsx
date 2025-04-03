import React from 'react';
import aboutImage from '../../assets/aboutus.png'; // replace with your actual image

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__content">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.
            Lorem ipsum dolor sit amet consectetur sadipscing elitr.
          </p>
          <button>Learn More</button>
        </div>
        <div className="about__image">
          <img src={aboutImage} alt="About us" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
