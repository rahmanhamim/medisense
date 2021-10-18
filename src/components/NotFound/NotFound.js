import React from "react";
import notFoundImg from "../../images/notfound.gif";

const NotFound = () => {
 return (
  <div className="not-found-container d-flex justify-content-center align-items-center my-5">
   <div>
    <h1 className="text-center text-danger">Sorry Page Not Found</h1>
    <img src={notFoundImg} alt="" />
   </div>
  </div>
 );
};

export default NotFound;
