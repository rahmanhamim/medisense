import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./OurOffer.css";

const OurOffer = () => {
 return (
  <Container className="my-5">
   <h1 className="our-offer-title my-5">What We Offer</h1>
   <Row xs={1} md={2} className="mx-auto ">
    <Col className="d-flex align-items-center p-2">
     <div>
      <i className="fas fa-briefcase-medical our-offer-icon"></i>
     </div>
     <div>
      <h3>Rehabilitation Center</h3>
      <p>
       Rehabilitation hospitals, also referred to as inpatient rehabilitation
       hospitals, are devoted to the rehabilitation of patients with various
       neurological, musculoskeletal, orthopedic, and other medical conditions
       following stabilisation of their acute medical issues.
      </p>
     </div>
    </Col>
    <Col className="d-flex align-items-center p-2">
     <div>
      <i className="fas fa-file-medical our-offer-icon"></i>
     </div>
     <div>
      <h3>Medical Counseling</h3>
      <p>
       Counseling typically focuses on addressing the main symptoms or problems
       a person or group finds distressing. By doing this, counselors can help
       people overcome challenges, obstacles, or events that have affected their
       mental well-being.
      </p>
     </div>
    </Col>
    <Col className="d-flex align-items-center p-2">
     <div>
      <i className="fas fa-user-md our-offer-icon"></i>
     </div>
     <div>
      <h3>Qualified Doctors</h3>
      <p>
       Consultants are senior doctors that have completed full medical training
       in a specialised area of medicine and are listed. They have clinical
       responsibilities and administrative responsibilities..
      </p>
     </div>
    </Col>
    <Col className="d-flex align-items-center p-2">
     <div>
      <i className="fas fa-ambulance our-offer-icon"></i>
     </div>
     <div>
      <h3>Emergency Services</h3>
      <p>
       Emergency medical services, also known as ambulance services or paramedic
       services, are emergency services that provide urgent pre-hospital
       treatment and stabilisation for serious illness and injuries and
       transport to definitive care.
      </p>
     </div>
    </Col>
   </Row>
  </Container>
 );
};

export default OurOffer;
