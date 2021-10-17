import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
 return (
  <div className="footer-container p-5">
   <footer className="text-white text-center text-lg-start ">
    <div className="container p-4">
     <div className="row mt-4">
      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
       <h5 className="text-uppercase mb-4">About company</h5>

       <p>
        This website is for information purpose and not intended as medical
        advice or a substitude of a consultation with a professional healthcare
        provider
       </p>

       <div className="mt-4">
        <div type="button" className="btn btn-floating btn-light btn-lg m-2">
         <i className="fab fa-facebook-f"></i>
        </div>
        <div type="button" className="btn btn-floating btn-light btn-lg m-2">
         <i className="fab fa-dribbble"></i>
        </div>
        <div type="button" className="btn btn-floating btn-light btn-lg m-2">
         <i className="fab fa-twitter"></i>
        </div>
        <div type="button" className="btn btn-floating btn-light btn-lg m-2">
         <i className="fab fa-google-plus-g"></i>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
       <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

       <div className="form-outline form-white mb-4">
        <input
         type="text"
         id="formControlLg"
         className="form-control form-control-lg"
        />
        <label className="form-label" htmlFor="formControlLg">
         Search
        </label>
       </div>

       <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
        <li className="mb-3">
         <span className="fa-li">
          <i className="fas fa-home"></i>
         </span>
         <span className="ms-2">Sylhet, Bangladesh</span>
        </li>
        <li className="mb-3">
         <span className="fa-li">
          <i className="fas fa-envelope"></i>
         </span>
         <span className="ms-2">contact@medisense.com</span>
        </li>
        <li className="mb-3">
         <span className="fa-li">
          <i className="fas fa-phone"></i>
         </span>
         <span className="ms-2">+ 88 01712 08 93 06</span>
        </li>
       </ul>
      </div>

      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
       <h5 className="text-uppercase mb-4">Opening hours</h5>

       <table className="table text-center text-white">
        <tbody className="fw-normal">
         <tr>
          <td>Mon - Thu:</td>
          <td>8am - 9pm</td>
         </tr>
         <tr>
          <td>Fri - Sat:</td>
          <td>8am - 1am</td>
         </tr>
         <tr>
          <td>Sunday:</td>
          <td>9am - 10pm</td>
         </tr>
        </tbody>
       </table>
       <p>
        Developed by{" "}
        <Link to="https://www.facebook.com/rahmanhamim.info/" target="_blank">
         Rahman Hamim
        </Link>
       </p>
      </div>
     </div>
    </div>
   </footer>
  </div>
 );
};

export default Footer;
