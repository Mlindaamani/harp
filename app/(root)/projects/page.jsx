import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="text-center bg-success-subtle text-light mt-5 p-4 rounded-4 d-flex flex-column justify-content-center align-items-center">
      <Image
        src="/database.svg"
        width={150}
        height={150}
        alt="Projects"
        className="flex-fills"
      />
      <h3 className="text-secondary mt-3 p-3">No projects yet!</h3>
      <div>
        <Link
          className="btn btn-secondary p-3 m-5 d-flex align-items-center justify-content-between rounded-5"
          href="/projects/new"
        >
          <Image
            src="/add.svg"
            width={24}
            height={24}
            className="text-light"
            alt="Add"
          />
          <span>Add Projet</span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
