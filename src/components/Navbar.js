import React from "react";
import { NavLink } from "react-router-dom";

function handleOnSubmit(event) {
  event.preventDefault();
}

function Navbar(props) {
  return (
    <div className="outer-navbar">
      <NavLink to="/" style={{ color: "black" }}>
        <i className="fa fa-home">Home</i>
      </NavLink>
      <div className="middle-navbar">
        <div className="homesearch">
          <NavLink
            to="/blog"
            end
            className="blog-link"
            style={{ color: "black", textDecoration: "none" }}
          >
            Blog
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
