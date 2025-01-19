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
        <Image src="/home.svg" width={300} height={300} alt="hero" />
      </div>

      <div className="mt-5 p-5 text-center bg-white-subtle p-5 rounded-3">
        <button className="btn btn-warning p-4 text-light fw-bold w-100">
          {" "}
          <Link href="/projects/new" className="text-decoration-none text-light">
            +Add Project
          </Link>
        </button>
      </div>
    </>
  );
};

export default HomeFix;
