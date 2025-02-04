import { connectToMongoDb } from "@/app/lib/db";
import { Project } from "@/app/lib/models/Project";
import { error } from "console";
import { NextResponse } from "next/server";

// Create a new project
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
    const project = await Project.create({
      name,
      description,
      objective,
      scope,
    });

    return NextResponse.json(
      { message: "Project created successfully!", project },
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

// Get all projects
export async function GET(req) {
  try {
    // Connect to database
    await connectToMongoDb();
    //Retrieve projects
    const projects = await Project.find()
      .sort({ createdAt: "desc" })
      .limit(100);

    //Return projects
    return NextResponse.json(projects);
  } catch (error) {
    console.log("Failed to fetch projects", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export const getVideoById = async () => {
  // Get video id from the query string
  const { videoId } = await params;
  //GET mondodb instamce for a paticular video
  const video = Project.findById({ _id: videoId }).sort({
    name: "Kodack-ft-Gicci Mane",
  });

  if (video) {
    return Response.json({ data }).status(200);
  } else {
    return Response.json({
      error: "The video could not be found in the object storage",
    }).status(404);
  }
};

// import QuestionsList from "@/components/questions-list";
// import prisma from "@/lib/db";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

// export default async function AdminArea() {
//   const { isAuthenticated, getPermission } = getKindeServerSession();
//   const isLoggedIn = await isAuthenticated();
//   if (!isLoggedIn) {
//     redirect("/api/auth/login");
//   }

//   const requiredPermission = await getPermission("delete:question");
//   if (!requiredPermission?.isGranted) {
//     redirect("/dashboard");
//   }

//   const questions = await prisma.question.findMany();

//   return (
//     <main className="flex-1 py-10 px-5 items-center flex flex-col">
//       <h1 className="text-4xl font-bold mb-6">Admin Area</h1>

//       <QuestionsList questions={questions} showDeleteButton />
//     </main>
//   );
// }
