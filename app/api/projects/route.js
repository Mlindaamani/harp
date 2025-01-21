import { connectToMongoDb } from "@/app/lib/db";
import { Project } from "@/app/lib/models/Project";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToMongoDb();

    const { name, description, objective, scope } = await req.json();

    if (!name || !objective || !scope || !description) {
      return NextResponse.json(
        { error: "All inputs are required" },
        { status: 400 }
      );
    }

    // Check for duplicate project
    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      return NextResponse.json(
        { error: "Project with this name already exists" },
        { status: 409 }
      );
    }

    // Create a new project
    await Project.create({
      name,
      description,
      objective,
      scope,
    });

    return NextResponse.json(
      { message: "Project created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error creating a project:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await connectToMongoDb();
    const projects = await Project.find().sort({ createdAt: "desc" });
    return NextResponse.json(projects);
  } catch (error) {
    console.log("Failed to fetch projects", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
