import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import './Contact.css';

const ContactPage = () => {
  const [state, handleSubmit] = useForm('xleqpzyo');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear the error message as soon as the user starts typing
    if (emailError) setEmailError('');
  };

  const handleSubmitWithAnimation = async (e) => {
    e.preventDefault(); // Prevent default form submission
    await handleSubmit(e); // Submit the form using Formspree
    if (state.succeeded) {
      // Add a class to start the animation
      document
        .querySelector('.contact-page__form-container')
        .classList.add('suckIn');
      // Wait for the animation to complete before setting isSubmitted to true
      setTimeout(() => {
        setIsSubmitted(true);
      }, 1000); // Adjust the timeout to match the duration of your animation
    }
  };

  if (state.succeeded && !isSubmitted) {
    setIsSubmitted(true); // Update the isSubmitted state to trigger the thank-you message
  }

  return (
    <div className="contact-page">
      {!isSubmitted ? (
        <div
          className={`contact-page__form-container ${isSubmitted ? 'suckIn' : ''}`}
        >
          <form
            className="contact-page__form"
            onSubmit={(e) => {
              handleSubmitWithAnimation(e);
              if (state.succeeded) {
                setIsSubmitted(true); // Trigger the animation and show the thank you message
              }
            }}
          >
            <div className="contact-page__form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-page__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
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
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button
              className="contact-page__submit-btn"
              type="submit"
              disabled={state.submitting}
            >
              <span className="contact-page__submit-description">Send</span>
              <div className="ocean"></div>
            </button>
          </form>
        </div>
      ) : (
        <div className="thank-you-container show">
          <p className="thank-you-msg">Thanks for the message!</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
