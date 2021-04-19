import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ children, ...rest }) => {


  const auth = () =>{
    if(localStorage.getItem("auth_token") && localStorage.getItem("type") == 'customer'){
      return true
    }
    else{
      return false
    }
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
      auth() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;