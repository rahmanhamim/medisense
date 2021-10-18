import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Doctors.css";

const Doctors = () => {
 const [doctors, setDoctors] = useState([]);
 useEffect(() => {
  fetch("./doctors.json")
   .then((res) => res.json())
   .then((data) => setDoctors(data));
 }, []);

 return (
  <div className="doctors-container">
   <div className="doctor-banner d-flex align-items-center">
    <div className="container">
     <h1 className="text-muted">Our Doctors</h1>
    </div>
   </div>
   <div className="container my-5">
    <div className="doctors-title mx-auto">
     <p className="text-center">Meet our team</p>
     <h1>Certified &amp; Experienced Doctors</h1>
    </div>
   </div>
   <div className="container doctors-card my-5">
    <Row xs={1} md={4} className="g-4">
     {doctors.map((doctor) => (
      <Col key={doctor.id}>
       <Card className="h-100 doctor-card">
        <Card.Img variant="top" src={doctor.img} />
        <Card.Body className="text-center">
         <Card.Title style={{ color: "#f15b5a" }}>{doctor.name}</Card.Title>
         <Card.Text className="fw-bold"> {doctor.designation}</Card.Text>
        </Card.Body>
        <div className="doctor-icon d-flex justify-content-center">
         <i className="fab fa-facebook"></i>
         <i className="fab fa-twitter"></i>
         <i className="fab fa-instagram"></i>
        </div>
       </Card>
      </Col>
     ))}
    </Row>
   </div>
  </div>
 );
};

export default Doctors;
