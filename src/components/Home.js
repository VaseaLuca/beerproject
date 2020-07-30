import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import background_img from "../assets/background-image.png";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="screen">
          <div className="introduction-section">Mereu între prieteni</div>
          <div className="know-more">Află mai mult despre Berea Chișinău</div>
          <Link to="/produse">
            <button className="massive ui button">Află Mai Mult</button>
          </Link>
          <div className="know-more">Vino la Turul Berii</div>
          <Link to='/turul-berii'>
            <button className="massive ui button">Rezervă</button>
          </Link>

          <div>
            <Footer className="home-footer" />
          </div>
      </div>
      <img className="backbeer" src={background_img} alt="" />
    </div>
  );
};
export default Home;
