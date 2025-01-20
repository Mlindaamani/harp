"use client";
import { createProject } from "@/app/actions/project";
import { useActionState } from "react";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";

const NewProject = () => {
  const [state, formAction, isPending] = useActionState(createProject, {
    message: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      await createProject(formData);
      toast.success("Project created successfully", {
        duration: 4000,
        position: "top-center",
      });
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        duration: 4000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="p-4 mt-4 rounded-4 bg-white-subtle">
      <Image src="/add.svg" width={50} height={50} className="mb-3" alt="Add" />
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3 form-group">
          <label htmlFor="name" className="form-label">
            Project name
          </label>
          <input type="text" name="name" id="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="objective">Main Objective</label>
          <input
            type="text"
            name="objective"
            id="objective"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="scope">Project Scope</label>
          <input type="text" name="scope" id="scope" className="form-control" />
        </div>
        <div className="mb-3">
          <button
            disabled={isPending}
            type="submit"
            className="btn btn-warning fw-bold text-white fs-4"
          >
            {isPending ? "Creating project" : "Create Project"}
          </button>
          {state.message && <p>{state.message}</p>}
        </div>
      </form>
      <Toaster position="top-center" />
    </div>
  );
};

export default NewProject;
