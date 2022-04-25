import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
//import axios from "axios";

const Home = () => {
  const [home, setHome] = useState();

  /*
 
 useEffect( () => {
    axios.get('').then((response) =>{
      setHome(response.data)
    }
    ).catch(console.log('error'))
  }, []) 
  
  */

  return (
    <div>
      <NavBar />

      <div class="jumbotron jumbotron-fluid mt-3">
        <div class="container">
          <img
            className="wholefoods-logo"
            src={require("../Images/whole-foods-logo-2021-promo.jpg")}
            alt={"apple"}
            height="100px"
          />
          <h1 class="display-4">Dashboard</h1>
          <p class="lead">
            Overview of sales performance and figures in USA during 2020 - 2021.
          </p>
        </div>
      </div>

    
    </div>
  );
};

export default Home;
