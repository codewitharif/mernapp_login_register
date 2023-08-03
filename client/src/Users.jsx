import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Login";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://mernapp-login-register-server.vercel.app/users")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    // Clear the user authentication data from local storage
    try {
      if (localStorage.getItem("userName")) {
        localStorage.removeItem("userName");
        navigate("/login");

        // Clear the user authentication token from local storage
        // Perform any additional cleanup on the frontend (e.g., clear user data, etc.)
        // Redirect the user to the login page or update the state to handle logged-out state
      } else {
        console.warn(
          "Token not found in local storage. User might already be logged out."
        );
        // Handle the case where the token is not found in local storage (e.g., user is already logged out)
      }
    } catch (error) {
      console.error("Error while logging out:", error);
      // Handle any errors that might occur while accessing local storage
    }

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
