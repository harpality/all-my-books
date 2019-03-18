import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <span href="#" className="title">
            All My Books
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
    </div>
  );
};

export default Navbar;
