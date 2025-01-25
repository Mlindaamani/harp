"use client";
import { use, useEffect, useState } from "react";
import { Loading } from "@/app/components/Loading";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const EditProject = ({ params }) => {
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();
  const { id: projectId } = use(params);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);

    //Get form form data
    const formData = new FormData(event.target);
    try {
      const { message, id } = (
        await axiosInstance.put(`/api/projects/${projectId}`, formData)
      ).data;
      setIsPending(false);

      toast.success(message, {
        duration: 5000,
        id: "edit",
      });

      //Redirect to a project with an ID `id`
      router.push(`/projects/${id}`);
    } catch (error) {
      console.error(error);
      setIsPending(false);
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
    <div className="rounded-5 container d-flex align-items-center flex-column p-4">
      <div className="d-flex justify-content-start gap-3 align-items-center mb-3">
        <Image src="/edit.svg" width={50} height={50} alt="Add" className="mt-3"/>
        <span className="text-warning fs-3 fw-bold mt-3">Edit Project</span>
      </div>
      <form onSubmit={handleSubmit} autoComplete="off" className="w-75">
        <div className="mb-4 form-group">
          <label
            htmlFor="name"
            className="form-label mb-3 fw-bold text-warning"
          >
            Project name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control p-3 border-warning  outline-none fw-bold rounded-4"
            disabled={isPending}
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="form-label mb-3 fw-bold text-warning"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control p-3 border-warning outline-none fw-bold rounded-4"
            disabled={isPending}
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="objective"
            className="form-label mb-3 fw-bold text-warning"
          >
            Main Objective
          </label>
          <input
            type="text"
            name="objective"
            id="objective"
            className="form-control p-3 border-warning opacity-90 outline-none fw-bold rounded-4"
            disabled={isPending}
            value={project.objective}
            onChange={(e) =>
              setProject({ ...project, objective: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="scope"
            className="form-label mb-3 fw-bold text-warning"
          >
            Project Scope
          </label>
          <input
            type="text"
            name="scope"
            id="scope"
            className="form-control p-3 border-warning opacity-90 outline-none fw-bold rounded-4"
            disabled={isPending}
            value={project.scope}
            onChange={(e) => setProject({ ...project, scope: e.target.value })}
          />
        </div>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <button
            disabled={isPending}
            type="submit"
            className={
              isPending
                ? "btn btn-secondary btn-sm disabled fs-5 fw-bold  rounded-4 p-2"
                : "btn btn-warning fw-bold text-white fs-5 btn-sm rounded-4 p-2"
            }
          >
            {isPending ? "Editing project..." : "Edit Project"}
          </button>
          <Link
            href={`/projects/${projectId}`}
            type="submit"
            className="btn btn-danger fs-5 fw-bold btn-sm rounded-3 p-2 btn-sm"
          >
            Cancel
          </Link>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default EditProject;
