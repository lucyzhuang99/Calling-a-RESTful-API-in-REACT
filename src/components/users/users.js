import React, { useImperativeHandle } from "react";
import "./users.css";

const Users = ({ users }) => {
  return (
    <div>
      <center>
        <h4>Employee List</h4>
      </center>
      {users.map((user) => (
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">
              <img src={user.Avatar} alt="" width="65" height="80" />
              &nbsp;&nbsp;{user.Name}
            </h6>
            <label class="label">
              {user.Profession}
              <br />
              {user.Department}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
