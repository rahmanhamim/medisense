import React from "react";
import "./Banner.css";
import logo from "../../../images/medeSenseLogo.png";
import { Link } from "react-router-dom";

const Banner = () => {
 return (
  <div className="banner-container d-flex justify-content-center align-items-center">
   <div className="container">
    <div className="row d-flex align-items-center">
     <div className="col-12 col-md-7">
      <h1 className="banner-title">
       We <span className="banner-span">Care</span> for{" "}
       <span className="banner-span">You</span>{" "}
       <img className="banner-logo" src={logo} alt="" />
      </h1>
      <p className="banner-description">
       MediSense Specialized Hospital has all the characteristics of a
       world-class hospital with wide range of services and specialists,
       equipments and technology, ambience and service quality.
      </p>
      <Link to="/services" className="learn-more-btn">
       Read More
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Banner;
