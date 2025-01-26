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
    <div className="px-3">
      <div className="container d-flex justify-content-between align-items-center btn-sm mb-5 mt-3">
        <h3 className="text-warning fw-bold my-3 px-2">Projects</h3>
        <input
          type="search"
          placeholder="Search projects..."
          className="form-control p-3 w-50 rounded-4 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link
          className="btn btn-success rounded-4 text-center p-2"
          href="/projects/new"
        >
          <div className="d-flex justify-content-center align-items-center">
            <Image src="/add.svg" width={24} height={24} alt="Add" />
            <span className="lead">New</span>
          </div>
        </Link>
      </div>
      <div className="row justify-content-between align-items-center">
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <div key={project._id} className="col-md-4 mb-4">
              <Link
                href={`projects/${project._id}`}
                className="text-decoration-none"
              >
                <div className="p-3 bg-secondary text-light rounded-4">
                  <Image
                    src="/database.svg"
                    width={50}
                    height={50}
                    alt="service"
                    className="float-start text-warning mx-3 rounded"
                  />
                  <h5 className="text-warning">{project.name}</h5>
                  <p>{project.description}</p>
                  <p>
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
