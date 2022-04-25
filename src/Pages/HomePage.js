import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1 className="text-center" style={{"color" : "blue"}}> Welcome to Admin Page</h1>

      <h4 className="text-center" >
        <Link  className="text-center"  style={{"color" : "blue"}}  to="/addr">
         Add Restaurants
        </Link>
      </h4>
      <h4 className="text-center" >
        <Link className="text-center"  style={{"color" : "blue"}} to="/addd">
         Add Dishes
        </Link>
      </h4>
    </>
  );
};

export default HomePage;
