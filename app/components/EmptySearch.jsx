import React from "react";

export const EmptySearchResult = ({ searchTerm }) => {
  return (
    <div className="col-12 text-center mt-5">
      <p className="text-secondary rounded-4">
        No projects found for <span className="fw-bold">{searchTerm}</span>
      </p>
    </div>
  );
};
