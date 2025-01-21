import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://harpdev.vercel.app",
});
