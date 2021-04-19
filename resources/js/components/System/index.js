import React from "react";
import { Redirect, withRouter } from "react-router";
import SideBar from "../Base/SideBar";
import RouterPathSystem from "../RouterPathSystem";

function Dashboard() {



  if (localStorage.getItem("auth_token") != true && localStorage.getItem("type") != 'admin') {
    return <Redirect to="/login" />;
}
  return (

    <div id="wrapper">
      <SideBar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <RouterPathSystem />
        </div>
      </div>
    </div>
  );

}

export default withRouter(Dashboard);