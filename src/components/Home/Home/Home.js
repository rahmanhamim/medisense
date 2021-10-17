import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Services from "../../Shared/Services/Services";
import Banner from "../Banner/Banner";
import OurOffer from "../OurOffer/OurOffer";
import "./Home.css";

const Home = () => {
 return (
  <>
   <Header></Header>
   <Banner></Banner>
   <OurOffer></OurOffer>
   <Services></Services>
   <Footer></Footer>
  </>
 );
};

export default Home;
