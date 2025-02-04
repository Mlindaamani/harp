"use client";

import { useState } from "react";

export const ServiceProviderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    serviceType: "",
    experience: "",
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
    console.log("Service Provider Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-5 rounded-4">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Service Type</label>
        <input
          type="text"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Experience (in years)</label>
        <input
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Register as Service Provider
      </button>
    </form>
  );
};
