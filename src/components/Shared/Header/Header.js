import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/medeSenseLogo.png";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
 const { user, logOut } = useAuth();
 console.log(user);

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

      {user.email && (
       <div className="user-details m-0">
        <p className="my-0">
         <img src={user?.photoURL} alt="" />
         <span>
          <strong>{user?.displayName}</strong>
         </span>
        </p>
       </div>
      )}

      {!user?.email ? (
       <>
        <Link className="text-decoration-none mx-2 login-btn" to="/login">
         Login
        </Link>
        <Link className="text-decoration-none mx-2 signup-btn" to="/signup">
         Signup
        </Link>
       </>
      ) : (
       <button
        onClick={logOut}
        className="text-decoration-none mx-2 logout-btn"
       >
        Logout
       </button>
      )}
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Header;
