"use server";
import { axiosInstance } from "../lib/axiosInstance";

export async function createProject(formData) {
  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    scope: formData.get("scope"),
    objective: formData.get("objective"),
  };

  // Data validation
  if (!data.name || !data.description || !data.scope || !data.objective) {
    throw new Error("All fields are required.");
  }

  try {
    const response = await axiosInstance.post("/api/projects", data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error creating project:", error.response.data.error);
      throw new Error(error.response.data.error);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
}
