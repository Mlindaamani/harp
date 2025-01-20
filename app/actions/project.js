"use server";
import { axiosInstance } from "../lib/axiosInstance";

export async function createProject(formData) {
  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    scope: formData.get("scope"),
    objective: formData.get("objective"),
  };

  try {
    await axiosInstance.post("/api/projects", data);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.error);
      throw new Error(error.response.data.error);
    } else {
      console.log(error);
      throw new Error("An unexpected error occurred");
    }
  }
}
