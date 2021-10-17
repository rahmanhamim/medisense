import React from "react";
import "./Banner.css";
import logo from "../../../images/medeSenseLogo.png";

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
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
       nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
       volutpat.
      </p>
      <button className="btn-regular">Read More</button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Banner;
