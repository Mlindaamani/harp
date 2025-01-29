import * as yup from "yup";
// User registration Schema
export const registrationSchema = yup.object({
  fullname: yup
    .string()
    .min(3, "Fullname must be at least 3 characters")
    .max(50, "Fullname cannot exceed 50 characters")
    .required("Fullname is required"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  serviceType: yup
    .string()
    .min(3, "Service type must be at least 3 characters")
    .max(20, "Service type cannot exceed 20 characters")
    .required("Service type is required"),

  experience: yup
    .number()
    .positive("Experience must be a positive number")
    .integer("Experience must be an integer")
    .required("Experience is required"),

  cardNumber: yup
    .string()
    .matches(/^\d{16}$/, "Card number must be exactly 16 digits")
    .required("Card number is required"),

  expiryDate: yup
    .date()
    .min(new Date(), "Expiry date must be in the future")
    .required("Expiry date is required"),
});
