import React, { useState, useContext } from "react";
import { GlobalContext } from "./utils/global.context";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { state } = useContext(GlobalContext);
  const isDarkTheme = state.theme === 'dark';

  const validateForm = () => {
    if (formData.name.length <= 5) {
      setError("Please verify your information.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please verify your information.");
      return false;
    }
    if (formData.message.trim() === "") {
      setError("Please add a message.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (validateForm()) {
      setSuccess("Your message has been sent. We will contact you shortly.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <p>Send us your questions, and we’ll get back to you soon.</p>
      <form className="container mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className={`form-control ${isDarkTheme ? 'form-control-dark' : 'form-control-light'}`}
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`form-control ${isDarkTheme ? 'form-control-dark' : 'form-control-light'}`}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            className={`form-control ${isDarkTheme ? 'form-control-dark' : 'form-control-light'}`}
            rows="3"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </div>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {success && <div className="alert alert-success mt-3">{success}</div>}
        <button type="submit" className="btn btn-outline-danger">
          Send Message
        </button>
      <button type="button" className="btn btn-outline-secondary mt-3" onClick={() => window.location.href = '/'}>
        Go Back
      </button>
      </form>
    </div>
  );
};

export default Form;