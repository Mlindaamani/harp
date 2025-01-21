"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { axiosInstance } from "@/app/lib/axiosInstance";

const Services = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get("/api/projects/");
        //Checking if the backend provide data.
        console.log(response.data);
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="mt-5 mb-4 text-center fw-bolder text-success">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-4">
      <h3 className="text-warning fw-bold mb-3">Services I Offer</h3>
      <div className="row">
        {projects.map((project) => (
          <div key={project._id} className="col-md-4 mb-4">
            <div className="p-4 bg-secondary text-light fs-5 rounded-3 border-end border-warning border-5">
              <Image
                src="/repair.svg"
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
