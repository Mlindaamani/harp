"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { axiosInstance } from "@/app/lib/axiosInstance";
import { Loading } from "@/app/components/Loading";
import Link from "next/link";
import { filteredProjects } from "@/app/lib/utils/functions";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/api/projects/");
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <Loading />;

  // Get filtered projects based on the search term
  const filtered = filteredProjects(searchTerm, projects);

  return (
    <div className="container-fluid px-3">
      <div className="d-flex justify-content-between align-items-center mb-4 mt-3">
        <h3 className="text-warning fw-bold my-3">Projects</h3>
        <div className="d-flex align-items-center">
          <input
            type="search"
            placeholder="Search projects..."
            className="form-control p-3 w-50 rounded-4 me-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search projects"
          />
          <Link
            className="btn btn-success rounded-4 text-center p-2"
            href="/dashboard/projects/new"
          >
            <div className="d-flex justify-content-center align-items-center">
              <Image src="/svg/add.svg" width={24} height={24} alt="Add" />
              <span className="lead ms-2">New Project</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="row g-4">
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <div key={project._id} className="col-md-4">
              <Link
                href={`projects/${project._id}`}
                className="text-decoration-none"
              >
                <div className="p-4 bg-secondary text-light rounded-4 shadow-sm">
                  <Image
                    src="/svg/database.svg"
                    width={50}
                    height={50}
                    alt="Project Icon"
                    className="float-start text-warning mx-3 rounded"
                  />
                  <h5 className="text-warning line-clamp">{project.name}</h5>
                  <p className="text-muted line-clamp">{project.description}</p>
                  <p className="line-clamp">
                    <strong>Objective:</strong> {project.objective}
                  </p>
                  <p>
                    <strong>Scope:</strong> {project.scope}
                  </p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-5">
            <p className="text-secondary rounded-4">
              No projects found for{" "}
              <span className="fw-bold">{searchTerm}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProjectList;
