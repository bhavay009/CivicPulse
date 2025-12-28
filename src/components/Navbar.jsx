import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="navbar">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: 700 }}>CivicPulse</div>
        <nav>
          {token ? (
            <>
              <Link to="/dashboard" style={{ color: "white", marginRight: 12 }}>Dashboard</Link>
              <Link to="/create" style={{ color: "white", marginRight: 12 }}>Create</Link>
              <button onClick={logout} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "white", padding: "6px 10px", borderRadius: 6 }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/" style={{ color: "white", marginRight: 12 }}>Login</Link>
              <Link to="/register" style={{ color: "white" }}>Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
