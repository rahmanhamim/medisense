import React from "react";
import Services from "../../Shared/Services/Services";
import Banner from "../Banner/Banner";
import OurOffer from "../OurOffer/OurOffer";
import "./Home.css";

const Home = () => {
 return (
  <>
   <Banner></Banner>
   <OurOffer></OurOffer>
   <Services></Services>
  </>
 );
};

export default Home;
