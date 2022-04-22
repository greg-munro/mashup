import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/toproducts">Top Products</Link>
      <Link to="/map">Map button</Link>
    </div>
  );
};

export default NavBar;
