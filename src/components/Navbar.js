import React from "react";
import { NavLink } from "react-router-dom";

function handleOnSubmit(event) {
  event.preventDefault();
}

function Navbar(props) {
  return (
    <div className="outer-navbar">
      <div className="middle-navbar">
        <div className="logolinks">Logo+ links</div>
        <div className="homesearch">
          <NavLink to="/" end style={{ color: "black" }}>
            Home
          </NavLink>
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="search"
              value={props.searchval}
              onChange={(event) => {
                props.searchset(event.target.value);
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
