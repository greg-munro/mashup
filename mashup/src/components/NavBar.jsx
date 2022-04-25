import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="d-flex flex-row">
          <Link to="/" className="badge badge-dark">
          <img className="wholefoods-logo" src={require("../Images/download.png")} alt={"apple"} height="15px"/>
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
