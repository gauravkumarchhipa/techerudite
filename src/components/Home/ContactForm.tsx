import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <small>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
      </small>

      <form className="contact-form__grid">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Mail" />
        <input type="text" placeholder="Phone" />
        <select>
          <option>Budget</option>
          <option>$500 - $1,000</option>
          <option>$1,000 - $5,000</option>
        </select>
        <input type="text" placeholder="Description" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
