import React from "react";
import Services from "../../Shared/Services/Services";
import Banner from "../Banner/Banner";
import OurOffer from "../OurOffer/OurOffer";
import Quote from "../Quote/Quote";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
 return (
  <>
   <Banner></Banner>
   <OurOffer></OurOffer>
   <Services></Services>
   <Quote></Quote>
   <Testimonial></Testimonial>
  </>
 );
};

export default Home;
