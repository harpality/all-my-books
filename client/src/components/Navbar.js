import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <span href="#" className="title">
          Google Books
        </span>
        <ul className="right">
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
