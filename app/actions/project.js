"use server";
import { connectToMongoDb } from "@/app/lib/db";
import { Project } from "../lib/models/Project";

export async function createProject(formData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const scope = formData.get("scope");
  const objective = formData.get("objective");

  await connectToMongoDb();

  try {
    await Project.create({
      name,
      description,
      scope,
      objective,
    });
  } catch (error) {
    console.log(error);
  }
}
