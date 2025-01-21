import { Project } from "@/app/lib/models/Project";
import { connectToMongoDb } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  // Connect to the database
  await connectToMongoDb();

  // Extract the project ID from params
  const { id } = params;

  try {
    // Fetch the project by ID
    const project = await Project.findById(id);

    // Check if the project exists
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Return the found project
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching project:", error);

    // Check if the error is due to an invalid ID format
    if (error.name === "CastError") {
      return NextResponse.json(
        { error: "Invalid project ID" },
        { status: 400 }
      );
    }

    // Other unexpected errors
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
