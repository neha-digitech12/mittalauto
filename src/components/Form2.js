import React, { useState } from 'react';

function Popup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const formPayload = new URLSearchParams(formData);

  
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formPayload,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
          setErrorMessage(''); 
          setSuccessMessage('Your message has been sent successfully!');
        } else {
          setErrorMessage('There was an error sending your message. Please try again.');
          setSuccessMessage(''); 
        }
      })
      .catch(() => {
        setErrorMessage('There was an error sending your message. Please try again.');
        setSuccessMessage(''); 
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="access_key"
          value="3f0c0fd4-1cb8-4706-8769-406d0105dd6b"
        />
        <div className="form-group">
          <input
            type="text"
            id="name"
            className="form-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="form-label">Name*</label>
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            className="form-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="form-label">Email*</label>
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="phone"
            className="form-input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone" className="form-label">Phone*</label>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            className="form-input"
            cols="55"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label htmlFor="message" className="form-label">Message</label>
        </div>

        {/* Show error message if any */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {/* Show success message if form is submitted successfully */}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Popup;
