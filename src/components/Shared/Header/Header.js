import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/medeSenseLogo.png";

const Header = () => {
 return (
  <Navbar bg="light" expand="lg" className="py-3">
   <Container>
    <Link className="branding" to="/">
     Medi<span className="branding-span">Sense</span>
     <img className="branding-logo" src={logo} alt="" />
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ms-auto">
      <Link className="text-decoration-none mx-2 nav-link-custom" to="/">
       Home
      </Link>
      <Link
       className="text-decoration-none mx-2 nav-link-custom"
       to="/services"
      >
       Services
      </Link>
      <Link className="text-decoration-none mx-2 nav-link-custom" to="/doctors">
       Doctors
      </Link>
      <Link className="text-decoration-none mx-2 nav-link-custom" to="/about">
       About Us
      </Link>
      <Link className="text-decoration-none mx-2 login-btn" to="/about">
       Login
      </Link>
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Header;
