import React from "react";
import Image from "next/image";

export const SideBarImage = () => {
  return (
    <>
      <div className="d-flex justify-content-start align-items-center gap-2 mb-4">
        <Image
          src="/repair.svg"
          width={60}
          height={60}
          alt="logo"
          className="img-thumbnail rounded-5 border-warning border-3"
        />
        <h4 className="fw-bold text-secondary text-center m-2">HARP</h4>
      </div>
      <hr className="mb-5 border-3 border-warning" />
    </>
  );
};
