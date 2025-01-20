import { connectToMongoDb } from "@/app/lib/db";
import { Project } from "@/app/lib/models/Project";

export async function GET(req) {
  await connectToMongoDb();
  const projects = await Project.find({});
  return new Response(JSON.stringify(projects), { status: 200 });
}

export async function POST(req) {
  await connectToMongoDb();
  const { name, objective, scope } = await req.json();

  if (!name || !objective || !scope) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
    });
  }

  const newProject = await Project.create({
    name,
    description,
    objective,
    scope,
  });

  return new Response(JSON.stringify(newProject), { status: 201 });
}
