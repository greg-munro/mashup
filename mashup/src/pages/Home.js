import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Dashboard</h1>

      <div className="card">
        <div className="card-body" width="20px">
          <h5 className="card-title">Product</h5>
          <p className="card-text">Select a product from this carousel.</p>
          <a href="#" className="btn btn-primary">
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
