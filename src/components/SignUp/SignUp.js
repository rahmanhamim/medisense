import React from "react";
import { Button, Form } from "react-bootstrap";
import "./SignUp.css";
import signUpImg from "../../images/signup.svg";
import useAuth from "../../hooks/useAuth";
import googleLogo from "../../images/icons/google.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
 const {
  signInWithGoogle,
  handleEmailChange,
  handlePasswordChange,
  handleEmailRegistration,
  handleNameChange,
 } = useAuth();

 // reload funtion used for showing name of newly registerd user
 const reloadFunction = () => {
  setTimeout(function () {
   window.location.reload(1);
  }, 3000);
 };

 return (
  <div className="container my-5">
   <div className="row signup-container d-flex justify-content-around align-items-center">
    <div className="col-12 col-md-6">
     <img className="img-fluid" src={signUpImg} alt="" />
    </div>
    <div className="col-12 col-md-4">
     <Form onSubmit={handleEmailRegistration}>
      <Form.Group className="mb-3" controlId="userName">
       <Form.Control
        onBlur={handleNameChange}
        className="login-input"
        type="text"
        placeholder="Your Name"
        required
       />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control
        onBlur={handleEmailChange}
        className="login-input"
        type="email"
        placeholder="Enter email"
        required
       />
       <Form.Text className="text-muted">
        We'll never share your email with anyone else.
       </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control
        onBlur={handlePasswordChange}
        className="login-input"
        type="password"
        placeholder="Password"
        required
       />
      </Form.Group>
      <Button onClick={reloadFunction} className="btn-regular" type="submit">
       Create Account
      </Button>{" "}
     </Form>
     <Link to="/login" className="d-block my-2 text-danger">
      {" "}
      Already have an account{" "}
     </Link>
     <hr />
     <button onClick={signInWithGoogle} className="sign-in-btn ">
      <img className="sign-in-img" src={googleLogo} alt="" /> Sign in With
      Google
     </button>
    </div>
   </div>
  </div>
 );
};

export default SignUp;
