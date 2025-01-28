"use client";
import { Toaster, toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Loading } from "@/app/components/Loading";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function ProjectDetail({ params }) {
  const { id: projectId } = use(params);
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this project?");
    if (confirmed) {
      try {
        const response = await axiosInstance.delete(
          `/api/projects/${projectId}`
        );

        // Redirect to the projects list page
        if (response.status === 200) {
          toast.success("Project deleted successfully.", {
            duration: 6000,
            position: "top-center",
          });

          // Redirect to projects
          router.push("/projects");
        } else {
          toast.error("Failed to delete the project.", {
            duration: 5000,
            id: "edit",
          });
        }
      } catch (error) {
        toast.error("An error occurred while deleting the project.", {
          duration: 5000,
        });
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
        toast.error("Failed to fetch project details.", {
          duration: 5000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) return <Loading />;

  return (
    <div className="container p-5 mt-5 bg-light rounded-4 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-warning fw-bold">Project Details</h3>
        <div className="btn-group btn-group-sm">
          <Link
            href={`/dashboard/projects/edit/${projectId}`}
            className="btn btn-success btn-sm"
            aria-label="Edit project"
          >
            <Image src={"/svg/edit.svg"} width={30} height={30} alt="Edit" />
          </Link>

          <button
            className="btn btn-danger btn-sm"
            onClick={handleDelete}
            aria-label="Delete project"
          >
            <Image
              src={"/svg/delete.svg"}
              width={30}
              height={30}
              alt="Delete"
            />
          </button>

          <Link
            href={`/dashboard/projects`}
            className="btn btn-secondary btn-sm"
            aria-label="Back to projects"
          >
            <Image
              src={"/svg/arrow_back.svg"}
              width={30}
              height={30}
              alt="Back"
            />
          </Link>
        </div>
      </div>
      <div className="mb-4">
        <h5 className="text-warning">Name:</h5>
        <p className="text-muted">{project.name}</p>
      </div>
      <div className="mb-4">
        <h5 className="text-warning">Description:</h5>
        <p className="text-muted">{project.description}</p>
      </div>
      <div className="mb-4">
        <h5 className="text-warning">Scope:</h5>
        <p className="text-muted">{project.scope}</p>
      </div>
      <Toaster />
    </div>
  );
}
