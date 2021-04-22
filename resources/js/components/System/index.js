import React, { useState } from "react";
import { Redirect, withRouter } from "react-router";
import loginAPI from "../../api/login";
import SideBar from "../Base/SideBar";
import RouterPathSystem from "../RouterPathSystem";

function Dashboard() {


  const [isLogOut, setIsLogOut] = useState(false);

  const logOut = async () => {
      const res = await loginAPI.logout();
      if(res.success){
          localStorage.clear();
          setIsLogOut(true)
      }
      else{
          alert(res.message)
      }
  }

  if (localStorage.getItem("auth_token") != true && localStorage.getItem("type") != 'admin' || isLogOut) {
    return <Redirect to="/login" />;
}
  return (

    <div id="wrapper">
      <SideBar logout={()=>logOut}/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <RouterPathSystem />
        </div>
      </div>
    </div>
  );

}

export default withRouter(Dashboard);