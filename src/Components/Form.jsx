import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    if (formData.name.length <= 5) {
      setError("Please verify your information.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please verify your information.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (validateForm()) {
      setSuccess(`Thanks ${formData.name}, we’ll contact you soon via email.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </label>
      <button type="submit">Submit</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </form>
  );
};

export default Form;
