"use client";

import { useState } from "react";
import { CustomerForm } from "./Customer";
import { ServiceProviderForm } from "./Provider";

export default function Register() {
  const [userRole, setUserRole] = useState("customer");

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Register</h1>
      <div className="mb-4">
        <div className="form-check form-check-inline" id="customer">
          <input
            className="form-check-input"
            id="customer"
            type="radio"
            value="customer"
            checked={userRole === "customer"}
            onChange={handleRoleChange}
          />
          <label className="form-check-label">I am a Customer</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            id="service-provider"
            type="radio"
            value="serviceProvider"
            checked={userRole === "serviceProvider"}
            onChange={handleRoleChange}
          />
          <label className="form-check-label" id="service-provider">
            I am a Service Provider
          </label>
        </div>
      </div>
      {userRole === "customer" ? <CustomerForm /> : <ServiceProviderForm />}
    </div>
  );
}
