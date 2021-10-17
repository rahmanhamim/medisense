import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";

const Service = (props) => {
 const { name, img, descrption } = props.service;
 return (
  <Col>
   <Card className="h-100 service-card">
    <Card.Img variant="top" src={img} />
    <Card.Body>
     <Card.Title>
      <h4 className="fw-bold">{name}</h4>
     </Card.Title>
     <Card.Text className="text-muted">{descrption}</Card.Text>
    </Card.Body>
    <div className="service-card-btn px-3 pb-3">
     <button className="btn-regular">Learn More</button>
    </div>
   </Card>
  </Col>
 );
};

export default Service;
