import React from 'react';
import avatar from '../../assets/logo.png'; // Replace with your actual avatar image

const testimonials = [
  {
    name: 'Josh brollins',
    message:
      'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
    avatar,
  },
  {
    name: 'Josh brollins',
    message:
      'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
    avatar,
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Testimonials</h2>
      <div className="testimonials__grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <span className="quote quote--top">“</span>
            <div className="testimonial-card__header">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <strong>{testimonial.name}</strong>
            </div>
            <p>{testimonial.message}</p>
            <span className="quote quote--bottom">”</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
