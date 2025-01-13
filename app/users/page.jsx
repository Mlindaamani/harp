import React from "react";
import { UserProfile } from "../components/UserProfile";

export default function Users() {
  return (
    <div className="mt-5 p-5 rounded-5 hv-100 container">
      <div className="row gap-5 d-flex">
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
    </div>
  );
}
