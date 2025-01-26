import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeFix = () => {
  return (
    <>
      <div className="d-flex gap-5 justify-content-between align-items-center bg-light p-5 rounded-4">
        <h1 className="fw-bold fs-1">
          We Connect Household With Qualified Repair{" "}
          <span className="fw-bold text-warning">Professionals</span>
        </h1>
        <Image src="/svg/home.svg" width={300} height={300} alt="hero" />
      </div>

      <div className="mt-5 p-5 bg-white-subtle text-center rounded-3 align-end">
        <button className="btn btn-secondary p-2 text-light fw-bold w-25 rounded-5">
          {" "}
          <Link
            href="/projects/new"
            className="text-decoration-none text-light d-flex justify-content-center gap-3 align-items-center"
          >
            <Image src="/svg/add.svg" width={40} height={40} alt="hero" />
            <span>Add Project</span>
          </Link>
        </button>
      </div>
    </>
  );
};

export default HomeFix;
