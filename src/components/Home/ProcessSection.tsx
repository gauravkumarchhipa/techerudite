import React from 'react';

const steps = [
  {
    title: 'Step 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor',
  },
  {
    title: 'Step 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor',
  },
  {
    title: 'Step 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor',
  },
];

const ProcessSection = () => {
  return (
    <section className="process">
      <h2 className="process__title">Our Process</h2>
      <div className="process__grid">
        {steps.map((step, index) => (
          <div className="process__circle-wrapper" key={index}>
            <svg viewBox="0 0 200 200" className="process__circle-svg">
              <circle className="track" cx="100" cy="100" r="90" />
              <circle className="arc" cx="100" cy="100" r="90" />
            </svg>
            <div className="process__content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
