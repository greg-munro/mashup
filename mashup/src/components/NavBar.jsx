import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-dark">
        <div class="d-flex flex-row">
          <Link to="/" className="badge badge-dark">Home
          </Link>
          <Link to="/top-products" className="badge badge-dark">
            Top Products
          </Link>
          <Link to="/map" className="badge badge-dark">
            Map
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
