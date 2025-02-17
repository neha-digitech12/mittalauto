import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else {
      const sanitizedPhone = formData.phone.replace(/\D/g, "");
      if (sanitizedPhone.length !== 10) {
        newErrors.phone = "Phone number must be 10 digits";
        isValid = false;
      } else {
        setFormData((prevData) => ({
          ...prevData,
          phone: sanitizedPhone,
        }));
      }
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formDataToSend = new FormData();
      formDataToSend.append(
        "access_key",
        "3f0c0fd4-1cb8-4706-8769-406d0105dd6b"
      );
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        })
        .catch((error) => {
          alert("Error sending message");
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label htmlFor="name" className="form-label">
          Name*
        </label>
        {errors.name && <span className="error">{errors.name}</span>}
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
        <label htmlFor="email" className="form-label">
          Email*
        </label>
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <input
          type="number"
          id="phone"
          className="form-input"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone" className="form-label">
          Phone*
        </label>
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <textarea
          type="text"
          name="message"
          className="form-input"
          cols="55"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <label htmlFor="message" className="form-label">
          Message
        </label>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>

      <button type="submit" className="btn">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
