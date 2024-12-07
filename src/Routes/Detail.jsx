import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext);
  const isDarkTheme = state.theme === 'dark';
  const [dentist, setDentist] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setDentist(data));
  }, [id]);

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
      setSuccess(`Your message to ${dentist.name} has been sent.`);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="container mt-5">
      {dentist ? (
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={`../images/dentists/${dentist.id}.jpg`} 
              alt={`../images/doctor.jpg`} 
              className="img-fluid rounded-circle shadow"
            />
          </div>
          <div className="col-md-8">
            <h1 className="text-start">{dentist.name}</h1>
            <p><strong>Username:</strong> {dentist.username}</p>
            <p><strong>Email:</strong> {dentist.email}</p>
            <p><strong>Phone:</strong> {dentist.phone}</p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={`https://${dentist.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary"
              >
                {dentist.website}
              </a>
            </p>
            <div className="mt-4">
              <button
                className="btn btn-outline-danger me-3"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                Contact Dentist
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => window.history.back()}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading dentist details...</p>
        </div>
      )}

      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className={`modal-content ${isDarkTheme ? 'modal-dark' : 'modal-light'}`}>
            <div className="modal-header">
              <h5 className="modal-title" id="contactModalLabel">
                Contact {dentist?.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
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
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <button type="submit" className="btn btn-outline-danger">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
