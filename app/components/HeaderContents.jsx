import React from "react";
import Link from "next/link";

export const HeaderContents = ({ metadata }) => {
  return (
    <>
      <div className="container-fluid">
        <Link href="/" className="text-decoration-none">
          <h1 className="text-start fs-2 p-3 text-light fw-bold">
            {metadata.title}
          </h1>
        </Link>
      </div>
      <div className="container-fluid">
        <Link href="/users" className="text-decoration-none">
          <span className="text-light fs-4 fw-bold">Users</span>
        </Link>
      </div>
    </>
  );
};
