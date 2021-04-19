import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './Home/index';
import Customer from './Customer/index';
import ProtectedRoute from './ProtectedRoute';
import ProtectedRouteSystem from './ProtectedRouteSystem';
import System from './System/index';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import Login from './Login/index';
export default function App() {



  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/customer">
          <Customer />
        </ProtectedRoute>
        <ProtectedRouteSystem path="/system">
          <System />
        </ProtectedRouteSystem>
        <Route path="/*">
          <Redirect from="/" to="/" />
        </Route>
      </Switch>
    </Router>



  );
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



