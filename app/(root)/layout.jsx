import React from "react";
import { SideBar } from "../components/SideBar";

const RootLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row gap-5">
        <div className="col-auto p-1">
          <SideBar />
        </div>
        <div className="col d-flex bg-white shadow-sm mb-5 mt-5">
          <main className="flex-fill p-1 mb-5">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
