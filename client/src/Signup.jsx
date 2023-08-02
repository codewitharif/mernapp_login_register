import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container">
        <h1>Register page</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <br />

          <button type="submit">Register</button>
          <p>
            Already Registered? <Link to="/login">Login Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;