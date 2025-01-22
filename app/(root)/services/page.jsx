"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { axiosInstance } from "@/app/lib/axiosInstance";
import { Loading } from "@/app/components/Loading";

const Services = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/api/projects/");
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="px-3">
      <h3 className="text-warning fw-bold my-3 px-2">Services</h3>
      <div className="row justify-content-between align-items-center">
        {projects.map((project) => (
          <div key={project._id} className="col-md-4 mb-4">
            <div className="p-3 bg-secondary text-light rounded-4">
              <Image
                src="/database.svg"
                width={50}
                height={50}
                alt="service"
                className="float-start rounded text-warning mx-3"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
