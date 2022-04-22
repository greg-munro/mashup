import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <Link to="/">Home</Link>
        <Link to="/top-products">Top Products</Link>
        <Link to="/map">Map</Link>
      </nav>
    </div>
  );
};

export default NavBar;
