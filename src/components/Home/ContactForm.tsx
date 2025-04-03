import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchContactForm } from "../../redux/slices/contactFormSLice";

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state) => state.contactForm);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: any = {};
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.description) newErrors.description = "Description is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    dispatch(fetchContactForm(form));
  };

  return (
    <section className="contact-form">
      <small>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor...
      </small>

      <form className="contact-form__grid" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && (
          <small className="error">{errors.firstName}</small>
        )}

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Mail"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <small className="error">{errors.email}</small>}

        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <small className="error">{errors.phone}</small>}

        <select name="budget" value={form.budget} onChange={handleChange}>
          <option value="">Budget</option>
          <option value="$500 - $1,000">$500 - $1,000</option>
          <option value="$1,000 - $5,000">$1,000 - $5,000</option>
        </select>

        <input
          type="text"
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        {errors.description && (
          <small className="error">{errors.description}</small>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {error && <p className="error">❌ {error}</p>}
        {data && <p className="success">✅ Form submitted successfully!</p>}
      </form>
    </section>
  );
};

export default ContactForm;
