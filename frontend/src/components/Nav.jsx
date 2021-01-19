import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <h2>AYOCOVID</h2>
        <div className="menu">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/statistics">
            <button>Statistics</button>
          </Link>
          <Link to="/news">
            <button>News</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
