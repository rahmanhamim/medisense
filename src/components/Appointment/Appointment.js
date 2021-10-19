import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Appointment.css";

const Appointment = () => {
 const handleSubmit = (e) => {
  e.preventDefault();
 };

 return (
  <section className="appointment-section">
   <div className="appointment-banner d-flex align-items-center">
    <div className="container ">
     <h1>Make an appointment</h1>
    </div>
   </div>
   <div className="container my-5">
    <div className="appointment-title">
     <h1 className="text-center">
      Confirm Your <strong>Schedule</strong>
     </h1>
    </div>
    <div className="form-section">
     <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
       <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
         className="appointment-input"
         type="email"
         placeholder="Enter email"
        />
       </Form.Group>

       <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
         className="appointment-input"
         type="password"
         placeholder="Password"
        />
       </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
       <Form.Label>Address</Form.Label>
       <Form.Control
        className="appointment-input"
        placeholder="Street / Road No"
       />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
       <Form.Label>Address 2</Form.Label>
       <Form.Control className="appointment-input" placeholder="Area " />
      </Form.Group>

      <Row className="mb-3">
       <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control className="appointment-input" />
       </Form.Group>

       <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select className="appointment-input" defaultValue="Choose...">
         <option>Choose...</option>
         <option>...</option>
        </Form.Select>
       </Form.Group>

       <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control className="appointment-input" />
       </Form.Group>
      </Row>

      <Button className="btn-regular" type="submit">
       Submit
      </Button>
     </Form>
    </div>
   </div>
  </section>
 );
};

export default Appointment;
