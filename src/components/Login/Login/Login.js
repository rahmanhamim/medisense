import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import loginImg from "../../../images/medisenselogin.svg";
import googleLogo from "../../../images/icons/google.svg";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
 const { signInWithGoogle } = useAuth();

 return (
  <div className="login-container container">
   <div className="row d-flex justify-content-around align-items-center">
    <div className="col-12 col-md-5">
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control
        className="login-input"
        type="email"
        placeholder="Enter email"
        required
       />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" required>
       <Form.Label>Password</Form.Label>
       <Form.Control
        className="login-input"
        type="password"
        placeholder="Password"
       />
      </Form.Group>
      <Button className="btn-regular" type="submit">
       Login
      </Button>
     </Form>
     <hr />
     <button onClick={signInWithGoogle} className="sign-in-btn">
      <img className="sign-in-img" src={googleLogo} alt="" /> Sign in With
      Google
     </button>
    </div>
    <div className="col-12 col-md-5">
     <div>
      <img className="img-fluid" src={loginImg} alt="" />
     </div>
    </div>
   </div>
  </div>
 );
};

export default Login;
