"use client";
import { useState, useEffect } from "react";
import { Loading } from "@/app/components/Loading";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Link from "next/link";
import { use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

export default function ProjectDetail({ params }) {
  const { id: projectId } = use(params);
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this project?");
    if (confirmed) {
      const response = await axiosInstance.delete(`/api/projects/${projectId}`);

      // Redirect to the projects list page
      if (response.status == 200) {
        toast.success("Project deleted successfully.", {
          duration: 6000,
          position: "top-center",
        });
        router.push("/projects");
      } else {
        toast.error("Failed to delete the project.");
      }
    }
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axiosInstance.get(`/api/projects/${projectId}`);
        setProject(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) return <Loading />;

  return (
    <div className="container p-5 mt-5 bg-light-subtle">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h3 className="text-warning fw-bold">Project Details</h3>
        <div className="btn-group">
          <Link
            href={`/projects/edit/${projectId}`}
            className="btn btn-secondary btn-sm"
          >
            <Image src={"/edit.svg"} width={20} height={20} alt="update" />
          </Link>

          <button className="btn btn-dark btn-sm ">
            <Image
              src={"/delete.svg"}
              width={20}
              height={20}
              alt="delete"
              onClick={handleDelete}
            />
          </button>

          <Link href={`/projects`} className="btn btn-dark btn-sm ">
            <Image
              src={"/arrow_back.svg"}
              width={20}
              height={20}
              alt="delete"
            />
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="text-warning">Name:</h5>
          <p>{project.name}</p>
        </div>
        <div>
          <h5 className="text-warning">Description:</h5>
          <p>{project.description}</p>
        </div>
        <div>
          <h5 className="text-warning">Scope:</h5>
          <p>{project.scope}</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
