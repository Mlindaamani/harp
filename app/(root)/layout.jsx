import React from "react";
import { SideBar } from "../components/SideBar";

const RootLayout = ({ children }) => {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row justify-content-start g-5">
        <div className="col-auto">
          <SideBar />
        </div>
        <div className="col">
          <main className="flex-fill p-1 mb-5">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
