import React, { useState } from 'react';
import '../styles/Contact.css'; // Create a separate CSS file for styling if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for reaching out, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions, feedback, or need assistance, feel free to reach out to us!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;