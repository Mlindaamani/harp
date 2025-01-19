import React from "react";
import { users } from "@/app/lib/users";

const Users = () => {
  return (
    <div>
      <div className="container d-flex justify-content-start align-items-center gap-5 mb-5">
        <h2 className="fw-bold p-2 text-warning">Users</h2>
        <input
          type="search"
          name="search"
          id="search"
          className="form-control p-3 rounded-5 flex-fill text-warning"
          placeholder="Search users, handles, ..."
        />
      </div>
      <table className="table shadow-lg table-warning p-5">
        <thead>
          <tr>
            <th className="text-warning fw-bold">#ID</th>
            <th className="text-warning fw-bold">USERNAME</th>
            <th className="text-warning fw-bold">EMAIL</th>
            <th className="text-warning fw-bold">ROLE</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, username, email, role }) => (
            <tr key={id}>
              <th className="text-warning fw-bold">{id}</th>
              <td className="text-warning fw-bold">{username}</td>
              <td className="text-warning fw-bold">{email}</td>
              <td className="text-warning fw-bold">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
