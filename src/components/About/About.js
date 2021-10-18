import React from "react";
import "./About.css";
import aboutImg from "../../images/about-section-img.jpg";

const About = () => {
 return (
  <div className="about-container">
   <div className="about-top-img">
    <img
     src="https://i.ibb.co/D8NttM2/aboutpage.jpg"
     alt=""
     className="img-fluid"
    />
   </div>
   <div className="container about-info my-5">
    <div className="about-title">
     <h1>
      Welcome to <span className="fw-bold">Medical Guide</span>
     </h1>
     <p className="text-muted about-subtitle">
      The MediSense Hospital (TMH) began in 2020 as Sylhet's first digital
      private hospital. And while we had 100 beds to our name, we had the
      community of Bangladesh behind us, and we were ready to provide the best
      possible care for those in need.
     </p>
    </div>
    <div className="about-detail">
     <div className="row d-flex align-items-center">
      <div className="col-12 col-md-4">
       <div>
        <img src={aboutImg} alt="" className="img-fluid" />
       </div>
      </div>
      <div className="col-12 col-md-7 text-muted">
       <p className="fs-5">
        MediSense Hospitals is the largest Private health care system in
        Bangladesh. We provide essential inpatient, outpatient, and home-based
        services to more than one million Sylheties every year in more than 70
        locations across the city’s five boroughs. Our 11 acute care hospitals
        provide top-ranked trauma care, dozens of inpatient specialties, and
        mental health services, making communities healthy through a robust
        network of hospital-based primary care services for children and adults.
        Our hospitals have earned numerous special designations for quality and
        culturally responsive care including LGBTQ Healthcare Equity Leader,
        Baby Friendly, Safe Sleep, and top ranks by BD News and World Report.
       </p>
      </div>
     </div>
    </div>
    <div className="key-points my-5 py-2">
     <h1 className="pt-5">What We Do?</h1>
     <div className="row d-flex justify-content-around fs-5">
      <div className="col-12 col-md-3">
       <ul>
        <li>Neurology</li>
        <li>Births</li>
        <li>For Disabled</li>
       </ul>
      </div>
      <div className="col-12 col-md-3">
       <ul>
        <li>Traumatology</li>
        <li>Medical Dental</li>
        <li>X-Ray</li>
       </ul>
      </div>
      <div className="col-12 col-md-3">
       <ul>
        <li>Cardiology</li>
        <li>Pregnancy</li>
        <li>Child Care</li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default About;
