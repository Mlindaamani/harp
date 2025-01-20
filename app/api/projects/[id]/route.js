import { Project } from "@/app/lib/models/Project";
import { connectToMongoDb } from "@/app/lib/db";

export async function GET(req, { params }) {
  await connectToMongoDb();
  const { id } = await params;

  try {
    const project = await Project.findById(id);

    if (!project) {
      return new Response(JSON.stringify({ error: "Project not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid project ID" }), {
      status: 400,
    });
  }
}
