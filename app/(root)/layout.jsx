import React from "react";
import { LeftSideBar } from "../components/LeftSideBar";
import { RightSideBar } from "../components/RightSideBar";

const Home = ({ children }) => {
  return (
    <div className="bg-secondary d-flex flex-column vh-100">
      <main>
        <LeftSideBar />
        {children}
        <RightSideBar />
      </main>
    </div>
  );
};

export default Home;
