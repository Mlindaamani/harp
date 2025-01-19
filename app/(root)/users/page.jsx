import React from "react";
import { users } from "@/app/lib/users";

const Users = () => {
  return (
    <div className="p-4">
      <div className="container d-flex justify-content-around align-items-center gap-5 mb-5">
        <h4 className="fw-bold p-2 text-warning">Users</h4>
        <input
          type="search"
          name="search"
          id="search"
          className="form-control p-3 rounded-5 flex-fill text-warning"
          placeholder="Search users, role ..."
        />
      </div>
      <table className="table shadow-sm table-white p-5">
        <thead>
          <tr>
            <th className="text-dark fw-bolder">#ID</th>
            <th className="text-dark fw-bolder">USERNAME</th>
            <th className="text-dark fw-bolder">EMAIL</th>
            <th className="text-dark fw-bolder">ROLE</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, username, email, role }) => (
            <tr key={id}>
              <th className="text-dark fw-bolder">{id}</th>
              <td className="text-dark fw-bolder">{username}</td>
              <td className="text-dark fw-bolder">{email}</td>
              <td className="text-dark fw-bolder">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
