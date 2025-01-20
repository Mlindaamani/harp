"use server";
import axios from "axios";

export async function createProject(formData) {
  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    scope: formData.get("scope"),
    objective: formData.get("objective"),
  };

  try {
    const res = await axios.post("/api/projects", data);
    console.log(res.data);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      throw new Error(error.response.data.error);
    } else {
      console.log(error);
      throw new Error("An unexpected error occurred");
    }
  }
}
