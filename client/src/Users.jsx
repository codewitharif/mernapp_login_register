import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://mernapp-login-register-server.vercel.app/users")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    // Clear the user authentication data from local storage
    localStorage.removeItem("userName");
    useNavigate("/login");
    // Assuming you store the authentication token as 'token'
    // Perform any additional cleanup on the frontend (e.g., clear user data, etc.)
    // Redirect the user to the login page or update the state to handle logged-out state
  };
  return (
    <div className="container">
      <h1>
        <b>Registered User</b>
        <button onClick={handleLogout}>Logout</button>
      </h1>
      <br />
      <br />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
