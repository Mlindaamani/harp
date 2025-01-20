import { connectToMongoDb } from "@/app/lib/db";
import { errorHandler } from "@/app/lib/errorHandler";
import { Project } from "@/app/lib/models/Project";

export async function POST(req) {
  try {
    await connectToMongoDb();
    const { name, description, objective, scope } = await req.json();

    if (!name || !objective || !scope || !description) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
        }
      );
    }

    // Check for duplicate project
    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      return new Response(
        JSON.stringify({ error: "Project with this name already exists" }),
        {
          status: 409,
        }
      );
    }

    // Create a new project
    const project = await Project.create({
      name,
      description,
      objective,
      scope,
    });

    return new Response(JSON.stringify(project), { status: 201 });
  } catch (error) {
    errorHandler(error);
  }
}

export async function GET(req) {
  await connectToMongoDb();
  const projects = await Project.find();
  return new Response(JSON.stringify(projects), { status: 200 });
}
