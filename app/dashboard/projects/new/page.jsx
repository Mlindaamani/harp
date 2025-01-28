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
      });

      // Navigate to the newly created project
      router.push(`/projects/${project._id}`);
    } catch (error) {
      toast.error(error.message, {
        duration: 4000,
        position: "top-center",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="container d-flex align-items-center flex-column p-4 mt-5 bg-light rounded-4 shadow-sm">
      <div className="d-flex justify-content-start gap-3 align-items-center mb-4">
        <Image
          src="/svg/post.svg"
          width={50}
          height={50}
          alt="Add"
          className="mt-3"
        />
        <span className="text-warning fs-3 fw-bold">Add Project</span>
      </div>
      <form onSubmit={handleSubmit} autoComplete="off" className="w-75">
        <div className="mb-4">
          <label htmlFor="name" className="form-label fw-bold text-warning">
            Project Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control p-3 border-warning rounded-4"
            disabled={isPending}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="form-label fw-bold text-warning"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control p-3 border-warning rounded-4"
            disabled={isPending}
            required
            rows="3"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="objective"
            className="form-label fw-bold text-warning"
          >
            Main Objective
          </label>
          <input
            type="text"
            name="objective"
            id="objective"
            className="form-control p-3 border-warning rounded-4"
            disabled={isPending}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="scope" className="form-label fw-bold text-warning">
            Project Scope
          </label>
          <input
            type="text"
            name="scope"
            id="scope"
            className="form-control p-3 border-warning rounded-4"
            disabled={isPending}
            required
          />
        </div>
        <div className="mb-3">
          <button
            disabled={isPending}
            type="submit"
            className={`btn fw-bold text-white fs-5 btn-sm rounded-4 p-2 ${
              isPending ? "btn-secondary opacity-50" : "btn-warning"
            }`}
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
