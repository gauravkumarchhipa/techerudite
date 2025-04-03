import React from 'react';
import '../../styles/_services.scss';
import auditIcon from '../../assets/icons/audit.png';
import budgetIcon from '../../assets/icons/budgetIcon.png';
import payrollIcon from '../../assets/icons/payrollIcon.png';
import softwareIcon from '../../assets/icons/softwareIcon.png';
import taxIcon from '../../assets/icons/tax.png';
import managementIcon from '../../assets/icons/managementIcon.png';

const services = [
  {
    icon: auditIcon,
    title: 'Audit & Account',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: budgetIcon,
    title: 'Budget & Projections',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.',
  },
  {
    icon: payrollIcon,
    title: 'Payroll & Bookkeeping',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.',
  },
  {
    icon: softwareIcon,
    title: 'Software Training & IT',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: taxIcon,
    title: 'Tax planning & Returns',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.',
  },
  {
    icon: managementIcon,
    title: 'Management Information',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
];

const ServiceSection = () => {
  return (
    <section className="services">
      <h2 className="services__title">Services</h2>
      <div className="services__grid">
        {services.map((service, index) => (
          <div key={index} className="services__item">
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
