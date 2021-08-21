import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Hritik's Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className="new_Blog">
          New Blog
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
