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
import loginAPI from '../api/login';
import { addComputer, addData, addType } from '../actions/token';
export default function App() {
  const token = useSelector(state => state.token.token)
  const dispatch = useDispatch();


  const fetchUser = async () => {

    if (token == null) {
      localStorage.clear();
    }
    else {
      const res = await loginAPI.getUser()
      if (res.success) {

        localStorage.setItem("auth_token", true);
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("type", res.type);
        const getType = res.type;
        const getData = res.data
        const action2 = addData(getData);
        const action3 = addType(getType);
        dispatch(action2);
        dispatch(action3);

        if (res.data.type == 'customer') {
          localStorage.setItem("computer", res.computer);
          const getComputer = res.computer;
          const action4 = addComputer(getComputer);
          dispatch(action4);
        }

      }
      else {
        localStorage.clear();
      }
    }



  }

  useEffect(() => {

    fetchUser()
  }, []);


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



