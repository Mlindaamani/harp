import { connectToMongoDb } from "@/app/lib/db";
import { Project } from "@/app/lib/models/Project";

export async function POST(req) {
  await connectToMongoDb();
  const { name, description, objective, scope } = await req.json();

  if (!name || !objective || !scope || !description) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
    });
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
  const newProject = await Project.create({
    name,
    description,
    objective,
    scope,
  });

  return new Response(JSON.stringify(newProject), { status: 201 });
}
