import * as yup from "yup";

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

export const projectSchema = yup.object({
  name: yup
    .string()
    .min(3, "The project name must be atleat 3  characters long")
    .max(50, "The project name cannot be greater than 50 characters")
    .required("The project name cannot be empty"),

  description: yup
    .string()
    .min(20)
    .max(200, "The project description cannot be more than 200 characters")
    .required("The project descriptio is required"),

  scope: yup
    .number()
    .positive("The scope must be a positive number")
    .integer("The scope  must an interger")
    .required("The scope is required"),

  objective: yup
    .string()
    .min(100, "The minmun objectives must be atleast 100 characters")
    .required("The project objectives are required"),
});
