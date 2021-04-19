import React, {  useState } from "react";
import "./login.css";

import { Redirect } from "react-router-dom";

import loginAPI from "../../api/login"
import { useDispatch, useSelector } from "react-redux";
import { addData, addToken, addType } from "../../actions/token";




function Login() {

  const dispatch = useDispatch();


  const createToken = () => {
    const getToken = localStorage.getItem('token');
    const getType = localStorage.getItem('type');
    const getData = JSON.parse(localStorage.getItem('user'))

    const action1 = addToken(getToken);
    const action2 = addData(getData);
    const action3 = addType(getType);
    dispatch(action1);
    dispatch(action2);
    dispatch(action3);
  }


  const [islogged, setIslogged] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleChangUser = (event) => {
    let val = event.target.value;
    setName(val)
  }
  const handleChangPass = (event) => {
    let val = event.target.value;
    setPassword(val)
  }






  const login = async () => {

const data = {
  name,
  password
}
     const res = await loginAPI.loginSystem(data);
     if(res.success){

localStorage.setItem("auth_token", true);
localStorage.setItem("user", JSON.stringify(res.data));
localStorage.setItem("token", res.token);
localStorage.setItem("type", res.type);
createToken()

setIslogged(true)


     }
     else{
      alert(res.message)
     }
  };



  const handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      login()
    }
  }

  if (localStorage.getItem("auth_token") && localStorage.getItem("type")=='admin') {
    return <Redirect to="/system" />;
  }
  return (



    <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src="img/logo.jpg" alt="login" className="login-card-img" />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <p className="login-card-description">Đăng nhập</p>
                <form action="#!">
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Email address" onChange={(event) => handleChangUser(event)} onKeyPress={(event) => handleKeyPress(event)} />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="***********" onChange={(event) => handleChangPass(event)} onKeyPress={(event) => handleKeyPress(event)} />
                  </div>
                  <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" defaultValue="Login" onClick={login} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  );

}
export default Login;