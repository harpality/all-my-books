import React, { Component } from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="title">
          Google Books
        </a>
        <ul className="right">
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
