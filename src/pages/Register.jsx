import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      console.log("Register response:", res);
      alert("Registration successful!");
      navigate("/");
    } catch (err) {
      console.error("Register error:", err?.response || err);
      setError(err?.response?.data?.message || err.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleRegister} className="card">
        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
