import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function Footer() {
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    try {
      const response = await axios.get("http://localhost:4000/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error, "no data");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="footer">
      <div className="logo">
        <p>logo</p>
      </div>

      <div className="categorylinks">
        <ul>
          {categories.map((genre) => {
            return (
              <li style={{ textDecoration: "none" }}>
                <NavLink
                  to={`/categories/${genre.id}`}
                  style={{ color: "black" }}
                >
                  {genre.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <NavLink to={"/signup"}>
          <h2 style={{ color: "black" }}>Signup</h2>
        </NavLink>
      </div>

      <div>
        <h3>My account</h3>
      </div>
      <div>
        <p>icons</p>
      </div>
    </div>
  );
}

export { Footer };
