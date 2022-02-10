import React from "react";
import { NavLink } from "react-router-dom";

function handleOnSubmit(event) {
  event.preventDefault();
}

function Navbar(props) {
  return (
    <div className="outer-navbar">
      <div className="middle-navbar">
        yellow1
        <div>Logo+ links</div>
        <div className="homesearch">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/" end>
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
