"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../lib/schemas/register";

export default function Register() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration Successful!");
  };

  const nextStep = async () => {
    let isValid = false;
    // Validate fields based on the current step
    if (step === 1) {
      // Validate only name and email
      isValid = await trigger(["fullname", "email"]);
    } else if (step === 2) {
      // Validate only serviceType and experience
      isValid = await trigger(["serviceType", "experience"]);
    } else if (step === 3) {
      // Validate only cardNumber and expiryDate
      isValid = await trigger(["cardNumber", "expiryDate"]);
    }

    if (isValid) {
      // Move to the next step if valid
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="container mt-5 bg-dark-subtle rounded-5 p-5">
      <h3 className="text-center my-5 fw-bold text-secondary">
        Service Provider Registration
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        {step === 1 && (
          <div className="bg-primary-subtle p-4 rounded-4 mb-4">
            <h2 className="text-secondary mb-5">
              <span className="badge text-bg-secondary rounded-5 fw-bold">
                1
              </span>{" "}
              Personal Information
            </h2>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className={`form-control p-3 rounded-4 ${
                  errors.fullname ? "is-invalid" : ""
                }`}
                {...register("fullname")}
              />
              {errors.fullname && (
                <div className="invalid-feedback">
                  {errors.fullname.message}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control p-3 rounded-4 ${
                  errors.email ? "is-invalid" : ""
                }`}
                {...register("email")}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-primary-subtle p-4 rounded-4 mb-4">
            <h2 className="text-secondary  mb-5">
              {" "}
              <span className="badge text-bg-secondary rounded-5 fw-bold">
                2
              </span>{" "}
              Service Details
            </h2>
            <div className="mb-3">
              <label className="form-label">Service Type</label>
              <input
                type="text"
                className={`form-control p-3 rounded-4 ${
                  errors.serviceType ? "is-invalid" : ""
                }`}
                {...register("serviceType")}
              />
              {errors.serviceType && (
                <div className="invalid-feedback">
                  {errors.serviceType.message}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Experience (Years)</label>
              <input
                type="number"
                className={`form-control p-3 rounded-4 ${
                  errors.experience ? "is-invalid" : ""
                }`}
                {...register("experience")}
              />
              {errors.experience && (
                <div className="invalid-feedback">
                  {errors.experience.message}
                </div>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-primary-subtle p-4 rounded-4 mb-4">
            <h2 className="text-secondary mb-5">
              <span className="badge text-bg-success rounded-5 fw-bold">3</span>{" "}
              Payment Information
            </h2>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                className={`form-control p-3 rounded-4 ${
                  errors.cardNumber ? "is-invalid" : ""
                }`}
                {...register("cardNumber")}
              />
              {errors.cardNumber && (
                <div className="invalid-feedback">
                  {errors.cardNumber.message}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Expiry Date</label>
              <input
                type="date"
                className={`form-control p-3 rounded-4 ${
                  errors.expiryDate ? "is-invalid" : ""
                }`}
                {...register("expiryDate")}
              />
              {errors.expiryDate && (
                <div className="invalid-feedback">
                  {errors.expiryDate.message}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="d-flex justify-content-between">
          {step > 1 && (
            <button
              type="button"
              className="btn btn-sm btn-secondary py-2 px-5 rounded-5 text-bold"
              onClick={prevStep}
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              className="btn btn-sm btn-primary py-2 px-5 rounded-5 text-bold"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-sm btn-success py-2 px-5 rounded-5 text-bold"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
