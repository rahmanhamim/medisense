import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
 const [services, setServices] = useState([]);
 useEffect(() => {
  fetch("./services.json")
   .then((res) => res.json())
   .then((data) => setServices(data));
 }, []);

 return (
  <section className="services-section py-5">
   <div className="container my-5">
    <h1 className="services-title">Our Services</h1>
    <Row xs={1} md={3} className="g-4">
     {services.map((service) => (
      <Service key={service.id} service={service}></Service>
     ))}
    </Row>
   </div>
  </section>
 );
};

export default Services;
