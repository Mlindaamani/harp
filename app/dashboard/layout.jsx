import React from "react";
import { SideBar } from "../components/SideBar";
import { Navbar } from "../components/NavBar";

const RootLayout = async ({ children }) => {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row justify-content-start g-5">
        <div className="col-auto">
          <SideBar />
        </div>
        <div className="col">
          <Navbar />
          <main className="flex-fill p-1 mb-5">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
