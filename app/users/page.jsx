import React from "react";
import { UserProfile } from "../components/UserProfile";

const colors = ["primary", "secondary", "warning", "info", "dark"];

export default function Users() {
  return (
    <div className="mt-5 p-5 rounded-5 hv-100 container">
      <div className="row gap-5 d-flex">
        {colors.map((color, index) => (
          <UserProfile color={color} key={index} />
        ))}
      </div>
    </div>
  );
}
