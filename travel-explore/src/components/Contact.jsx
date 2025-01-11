import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Details</h2>
          <p>If you have any inquiries, feel free to reach out to us through the details below:</p>
          <ul>
            <li>
              <strong>Phone:</strong> +91 1234567899
            </li>
            <li>
              <strong>Email:</strong> travelexplorer@gmail.com.com
            </li>
            <li>
              <strong>Address:</strong> mallakpet yadagiri
            </li>
          </ul>
        </div>
        
        <div className="contact-form-container">
          <h2>Message us  </h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
