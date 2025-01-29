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
    delayError: 2,
    reValidateMode: "onChange",
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
    <div className="container mt-5 bg-info-subtle rounded-4 p-5">
      <h1 className="text-center mt-4 mb-5">Service Provider Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        {step === 1 && (
          <div className="bg-info-subtle p-3 rounded">
            <h2>Step 1: Personal Information</h2>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className={`form-control ${
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
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email")}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-info-subtle p-3 rounded">
            <h2>Step 2: Service Details</h2>
            <div className="mb-3">
              <label className="form-label">Service Type</label>
              <input
                type="text"
                className={`form-control ${
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
                className={`form-control ${
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
          <div className="bg-info-subtle p-3 rounded">
            <h2>Step 3: Payment Information</h2>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                className={`form-control ${
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
                type="text"
                className={`form-control ${
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
              className="btn btn-secondary"
              onClick={prevStep}
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
