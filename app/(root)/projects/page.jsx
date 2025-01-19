import React from "react";
import Image from "next/image";

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
      <h3 className="text-secondary mt-3">No projects yet!</h3>
    </div>
  );
};

export default Projects;
