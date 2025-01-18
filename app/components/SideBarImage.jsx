import React from "react";
import Image from "next/image";

export const SideBarImage = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 mb-3">
      <Image
        src="/repair.svg"
        width={50}
        height={50}
        alt="logo"
        className="img-thumbnail rounded-5"
      />
      <h2 className="fw-bold text-warning text-center m-2">HARP</h2>
    </div>
  );
};
