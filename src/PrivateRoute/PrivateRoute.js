import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
 const { user, isLoading } = useAuth();

 if (isLoading) {
  return (
   <div className="container mx-auto text-center">
    <Spinner animation="grow" variant="info" />
   </div>
  );
 }

 return (
  <Route
   {...rest}
   render={({ location }) =>
    user.email ? (
     children
    ) : (
     <Redirect
      to={{
       pathname: "/login",
       state: { from: location },
      }}
     ></Redirect>
    )
   }
  ></Route>
 );
};

export default PrivateRoute;
