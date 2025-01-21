import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.BASE_URL_PROD
      : process.env.BASE_URL_DEV,
});
