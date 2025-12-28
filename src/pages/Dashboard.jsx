import React, { useEffect, useState } from "react";
import API from "../api/api";

function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/complaints")
      .then((res) => {
        setMessage("Welcome! Complaints loaded successfully.");
      })
      .catch(() => {
        setMessage("Unauthorized. Please login.");
      });
  }, []);

  return (
    <div className="container dashboard">
      <div className="card">
        <h2>Dashboard</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Dashboard;
