import React from "react";
import { SideBar } from "../components/SideBar";

const RootLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column vh-100 container-fluid">
      <div className="row gap-4">
        <div className="col-auto">
          <SideBar />
        </div>
        <div className="col d-flex bg-white border-start shadow-sm">
          <main className="p-5 flex-fill">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
