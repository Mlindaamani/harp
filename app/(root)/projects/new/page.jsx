"use client";
import { createProject } from "@/app/actions/project";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NewProject = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);
    const formData = new FormData(event.target);
    try {
      const { message, project } = await createProject(formData);

      // Clear form
      event.target.reset();

      // Show success toast
      toast.success(message, {
        duration: 4000,
        position: "top-center",
        id: "xcx",
      });

      // I will navigating to a newly created project
      router.push(`/projects/${project._id}`);

      setIsPending(false);
    } catch (error) {
      setIsPending(false);
      toast.error(error.message, {
        duration: 4000,
        position: "top-center",
        id: "project",
      });
    }
  };

  return (
    <div className="rounded-5 container d-flex align-items-center flex-column p-4">
      <div className="d-flex justify-content-start gap-3 align-items-center mb-3">
        <Image
          src="/post.svg"
          width={50}
          height={50}
          alt="Add"
          className="mt-3"
        />
        <span className="text-warning fs-3 fw-bold mt-3">Add Project</span>
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
          />
        </div>
        <div className="mb-3">
          <button
            disabled={isPending}
            type="submit"
            className={
              isPending
                ? "btn btn-secondary opacity-50 disabled fs-5 fw-bold btn-sm rounded-4 p-2"
                : "btn btn-warning fw-bold text-white fs-5 btn-sm rounded-4 p-2"
            }
          >
            {isPending ? "Creating project..." : "Create Project"}
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default NewProject;
