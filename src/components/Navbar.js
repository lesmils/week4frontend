import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="outer-navbar">
        <h1>Navbar</h1>
        <div className="middle-container">
          <NavLink to="/" end>
            Home
          </NavLink>
          <input type="text" placeholder="search"></input>
          <div className="inner-navbar"></div>
        </div>
      </div>
    </div>
  );
}

export { Navbar };
