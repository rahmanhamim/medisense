import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SingleService.css";

const SingleService = () => {
 const { serviceID } = useParams();

 const [services, setServices] = useState([]);
 useEffect(() => {
  fetch("/services.json")
   .then((res) => res.json())
   .then((data) => setServices(data));
 }, []);

 const singleService = services.find(
  (service) => Number(service.id) === Number(serviceID)
 );

 return (
  <div className="single-service-container container my-5">
   <h1 className="services-title">{singleService?.name}</h1>
   <div className="single-service-card">
    <div className=" text-center">
     <img
      src={singleService?.img}
      className="single-service-img img-fluid"
      alt=""
     />
    </div>
    <div className="single-service-text">
     <p className="fs-5">{singleService?.descrption}</p>
     <p className="fs-5">{singleService?.otherDetails}</p>
     <h3>Costs: {singleService?.cost}</h3>
    </div>
   </div>
  </div>
 );
};

export default SingleService;
