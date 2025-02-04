import React from "react";
import { SideBar } from "../components/SideBar";
import { Navbar } from "../components/NavBar";
import styles from "../styles/DashboardLayout.module.css";

const RootLayout = async ({ children }) => {
  return (
    <div className={`${styles.containerFluid}`}>
      <div className={`row g-0 ${styles.dashboardRow}`}>
        <div className="col-auto">
          <SideBar />
        </div>
        <div className="col d-flex flex-column">
          <Navbar />
          <main className={`p-1 mb-5 ${styles.mainContent}`}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;

// import React from "react";
// import { SideBar } from "../components/SideBar";
// import { Navbar } from "../components/NavBar";

// const RootLayout = async ({ children }) => {
//   return (
//     <div className="container-fluid overflow-hidden">
//       <div className="row justify-content-start g-5">
//         <div className="col-auto">
//           <SideBar />
//         </div>
//         <div className="col">
//           <Navbar />
//           <main className="flex-fill p-1 mb-5">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RootLayout;
