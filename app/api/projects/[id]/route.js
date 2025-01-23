import { Project } from "@/app/lib/models/Project";
import { connectToMongoDb } from "@/app/lib/db";
import { NextResponse } from "next/server";

// Get individual project by ID
export async function GET(req, { params }) {
  // Connect to the database
  await connectToMongoDb();

  // Extract the project ID from params
  const { id } = await params;

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

// Update a project by ID
export async function PUT(req, { params }) {
  await connectToMongoDb();

  // Extract the project ID from params
  const { id: projectId } = await params;

  // Parse the request body
  const data = await req.json();

  // Update the project by ID
  const updatedProject = await Project.findByIdAndUpdate(projectId, data, {
    new: true,
  });

  if (!updatedProject) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }
  return NextResponse.json(
    { message: "Project updated successfully!", id: updatedProject._id },
    { status: 200 }
  );
}

export async function DELETE(request, { params }) {
  await connectToMongoDb();

  // Extract the project ID from params
  const { id } = await params;

  // Find and delete the project
  const deletedProject = await Project.findByIdAndDelete(id);

  if (!deletedProject) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "Project deleted successfully!" },
    { status: 200 }
  );
}
