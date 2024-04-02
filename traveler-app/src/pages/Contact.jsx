import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Contact.css';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleBlur = () => {
    if (email && !validateEmail(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    // Clear the error message as soon as the user starts typing
    if (emailError) setEmailError('');
  };

  return (
    <div className="contact-page">
      <div className="contact-page__form-container">
        <form className="contact-page__form">
          <div className="contact-page__form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="contact-page__form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          {emailError && (
            <div className="contact-page__email-error">{emailError}</div>
          )}
          <div className="contact-page__form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button className="contact-page__submit-btn">
            <span className="contact-page__submit-description">Send</span>
            <div className="ocean"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
