import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Testimonial.css";
import patientImg1 from "../../../images/patient1.jpg";
import patientImg2 from "../../../images/patient2.jpg";

const Testimonial = () => {
 return (
  <section className="testimonial-section ">
   <div className="testimonial-title container my-5">
    <p>Our Testimonials</p>
    <h2>What Our Patients Say</h2>
   </div>
   <div className="testimonial-cards-container container">
    <div className="row d-flex justify-content-center mx-2">
     <div className="col-12 col-md-4 testimonial-card">
      <div>
       <img src={patientImg1} className="testimonial-img" alt="" />
      </div>
      <div>
       <p>
        "Excellent service, courtesy, one of best hospital experiences!" "Good.
        Good. Good. A good experience. Everything went well. No complaints no
        delays no pain a very well seen procedure." "Great experience all
        around. Great. Great. Great. Thanks to all who cared for me that day -
        Great." "All of above was EXCELLENT. I have nothing but good comments to
        say about MEDISENSE!"
       </p>
       <small>
        <strong>- Cameron Steve</strong>
       </small>
      </div>
     </div>
     <div className="col-12 col-md-4 testimonial-card">
      <div>
       <img src={patientImg2} className="testimonial-img" alt="" />
      </div>
      <div>
       <p>
        "Everything was perfect! Lacy (Halsrud) is very KNOWLEDGEABLE. Very
        kind." "My visits are always good." "I was very satisfied with
        everything." "Your personnel are so friendly and greet me with a smile,
        even if they don't know me. How pleasant it is in your atmosphere. Thank
        you."
       </p>
       <small>
        <strong>- H. Sterling</strong>
       </small>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Testimonial;
