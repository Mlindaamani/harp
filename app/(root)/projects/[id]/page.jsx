"use client";
import { useState, useEffect } from "react";
import { Loading } from "@/app/components/Loading";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Link from "next/link";
import { use } from "react";

export default function ProjectDetail({ params }) {
  const { id: projectId } = use(params);
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

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
        <Link href={`/projects/${projectId}/edit`} className="btn btn-warning">
          Edit
        </Link>
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
    </div>
  );
}
