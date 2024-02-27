import React from "react";
import { Link } from "react-router-dom";
import cosmetic from "../assets/5.jpg";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${cosmetic})` }}>
      <div className="headerContainer">
        <h1>GABRINI LONDON </h1>
        <p>
          Royal Cosmetics
          <br />
          with Timeless Elegance
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
