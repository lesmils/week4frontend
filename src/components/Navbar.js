import React from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";

function handleOnSubmit(event) {
  event.preventDefault();
}

function Navbar() {
  const [search, setSearch] = useState("");
  return (
    <div className="outer-navbar">
      <div className="middle-navbar">
        yellow1
        <div>Logo+ links</div>
        <div>
          <NavLink to="/" end>
            Home
          </NavLink>
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                console.log(setSearch);
              }}
            ></input>
            <button onClick={handleOnSubmit}>search</button>
          </form>
        </div>
      </div>
      <div>icons (user/cart/favorites)</div>
    </div>
  );
}

export { Navbar };
