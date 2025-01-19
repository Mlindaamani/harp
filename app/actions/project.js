"use server";
import { connectToMongoDb } from "@/app/lib/db";
import { Project } from "../lib/models/Project";

export async function createProject(prevState, formData) {
  await connectToMongoDb();
  try {
    await Project.create(formData);
    return { message: "Project created successfully" };
  } catch (error) {
    console.log(error);
  }
}
