import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="text-center bg-success-subtle text-light mt-5 p-4 rounded-4 d-flex flex-column justify-content-center align-items-center">
      <Image
        src="/database.svg"
        width={300}
        height={300}
        alt="Projects"
        className="flex-fills"
      />
      <h3 className="text-secondary mt-3 p-3">No projects yet!</h3>
      <div>
        <Link className="btn btn-secondary p-3 m-5" href="/projects/new">
          <Image
            src="/post.svg"
            width={24}
            height={24}
            className="text-light m-2"
            alt="Add"
          />
          Add Projet
        </Link>
      </div>
    </div>
  );
};

export default Projects;
