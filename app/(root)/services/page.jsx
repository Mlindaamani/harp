"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { axiosInstance } from "@/app/lib/axiosInstance";

const Services = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axiosInstance.get("/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
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
                src={project.image || "/default.svg"}
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

// import Image from "next/image";
// import React from "react";

// const Services = () => {
//   return (
//     <div className="p-4">
//       <h3 className="text-warning fw-bold mb-3">Services I Offer</h3>
//       <p className="p-4 bg-secondary text-light fs-5 rounded-3 mb-4 border-end border-warning border-5">
//         <Image
//           src="/repair.svg"
//           width={50}
//           height={50}
//           alt="service"
//           className="float-start rounded text-warning mx-3"
//         />
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
//         voluptatem quo nobis ratione, qui dolore laborum minus sit eum sint
//         doloremque esse quis ipsa repudiandae architecto earum! Libero, dolorem
//         ratione molestiae omnis incidunt sapiente ea eaque aspernatur ut
//         necessitatibus asperiores itaque unde officiis dolore amet? Esse
//         corrupti fugiat sint commodi. Recusandae nisi laudantium corporis
//         aspernatur hic, accusamus debitis repellat. Ad enim, assumenda sit
//         consequatur iste excepturi, molestiae ipsa nostrum, neque tempore amet
//         illum! Eaque dolor veritatis et totam illo nesciunt iste dolorem vel
//         assumenda aliquam. Quam dolorum expedita est explicabo doloribus! Ipsum
//         sint atque expedita perferendis? Autem, nemo! Facilis, sunt.
//       </p>
//       <p className="p-4 bg-secondary text-light fs-5 rounded-3 mt-2 border-end border-warning border-5 mb-4">
//         <Image
//           src="/repair.svg"
//           width={50}
//           height={50}
//           alt="service"
//           className="float-start rounded text-warning mx-3"
//         />
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
//         voluptatem quo nobis ratione, qui dolore laborum minus sit eum sint
//         doloremque esse quis ipsa repudiandae architecto earum! Libero, dolorem
//         ratione molestiae omnis incidunt sapiente ea eaque aspernatur ut
//         necessitatibus asperiores itaque unde officiis dolore amet? Esse
//         corrupti fugiat sint commodi. Recusandae nisi laudantium corporis
//         aspernatur hic, accusamus debitis repellat. Ad enim, assumenda sit
//         consequatur iste excepturi, molestiae ipsa nostrum, neque tempore amet
//         illum! Eaque dolor veritatis et totam illo nesciunt iste dolorem vel
//         assumenda aliquam. Quam dolorum expedita est explicabo doloribus! Ipsum
//         sint atque expedita perferendis? Autem, nemo! Facilis, sunt.
//       </p>
//       <p className="p-4 bg-secondary text-light fs-5 rounded-3 mt-2 border-end border-warning border-5 mb-4">
//         <Image
//           src="/database.svg"
//           width={50}
//           height={50}
//           alt="service"
//           className="float-start rounded text-warning mx-3"
//         />
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
//         voluptatem quo nobis ratione, qui dolore laborum minus sit eum sint
//         doloremque esse quis ipsa repudiandae architecto earum! Libero, dolorem
//         ratione molestiae omnis incidunt sapiente ea eaque aspernatur ut
//         necessitatibus asperiores itaque unde officiis dolore amet? Esse
//         corrupti fugiat sint commodi. Recusandae nisi laudantium corporis
//         aspernatur hic, accusamus debitis repellat. Ad enim, assumenda sit
//         consequatur iste excepturi, molestiae ipsa nostrum, neque tempore amet
//         illum! Eaque dolor veritatis et totam illo nesciunt iste dolorem vel
//         assumenda aliquam. Quam dolorum expedita est explicabo doloribus! Ipsum
//         sint atque expedita perferendis? Autem, nemo! Facilis, sunt.
//       </p>
//       <p className="p-4 bg-secondary text-light fs-5 rounded-3 mt-2 border-end border-warning border-5 mb-4">
//         <Image
//           src="/chat.svg"
//           width={50}
//           height={50}
//           alt="service"
//           className="float-start rounded text-warning mx-3"
//         />
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
//         voluptatem quo nobis ratione, qui dolore laborum minus sit eum sint
//         doloremque esse quis ipsa repudiandae architecto earum! Libero, dolorem
//         ratione molestiae omnis incidunt sapiente ea eaque aspernatur ut
//         necessitatibus asperiores itaque unde officiis dolore amet? Esse
//         corrupti fugiat sint commodi. Recusandae nisi laudantium corporis
//         aspernatur hic, accusamus debitis repellat. Ad enim, assumenda sit
//         consequatur iste excepturi, molestiae ipsa nostrum, neque tempore amet
//         illum! Eaque dolor veritatis et totam illo nesciunt iste dolorem vel
//         assumenda aliquam. Quam dolorum expedita est explicabo doloribus! Ipsum
//         sint atque expedita perferendis? Autem, nemo! Facilis, sunt.
//       </p>
//       <p className="p-4 bg-secondary text-light fs-5 rounded-3 mt-2 border-end border-warning border-5 mb-4">
//         <Image
//           src="/support.svg"
//           width={50}
//           height={50}
//           alt="service"
//           className="float-start rounded text-warning mx-3"
//         />
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
//         voluptatem quo nobis ratione, qui dolore laborum minus sit eum sint
//         doloremque esse quis ipsa repudiandae architecto earum! Libero, dolorem
//         ratione molestiae omnis incidunt sapiente ea eaque aspernatur ut
//         necessitatibus asperiores itaque unde officiis dolore amet? Esse
//         corrupti fugiat sint commodi. Recusandae nisi laudantium corporis
//         aspernatur hic, accusamus debitis repellat. Ad enim, assumenda sit
//         consequatur iste excepturi, molestiae ipsa nostrum, neque tempore amet
//         illum! Eaque dolor veritatis et totam illo nesciunt iste dolorem vel
//         assumenda aliquam. Quam dolorum expedita est explicabo doloribus! Ipsum
//         sint atque expedita perferendis? Autem, nemo! Facilis, sunt.
//       </p>
//     </div>
//   );
// };

// export default Services;
