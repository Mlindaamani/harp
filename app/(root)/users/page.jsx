import React from "react";
import { users } from "@/app/lib/users";

const Users = () => {
  return (
    <div>
      <div className="container d-flex justify-content-start align-items-center gap-5 mb-3">
        <h2 className="fw-bold p-2 text-warning">Users</h2>
        <input
          type="search"
          name="search"
          id="search"
          className="form-control p-3 rounded-5 flex-fill"
          placeholder="Search users, handles, ..."
        />
      </div>
      <table className="table shadow-sm">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">USERNAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">ROLE</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, username, email, role }) => (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>{username}</td>
              <td>{email}</td>
              <td>{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
