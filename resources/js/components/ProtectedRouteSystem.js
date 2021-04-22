import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRouteSystem = ({ children, ...rest }) => {


  const auth = () =>{
    if(localStorage.getItem("auth_token") && localStorage.getItem("type") == 'admin'){
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
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRouteSystem;