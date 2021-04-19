import React, { useEffect, useState } from 'react';
import computerAPI from "../../api/computer";

import Login from "./login";
import Echo from "laravel-echo";
import { Redirect } from 'react-router';
export default function Computer() {

    window.Pusher = require("pusher-js");

  window.Echo = new Echo({

      broadcaster: "pusher",

      key: "1a14666e78c2f14f00ec",

      cluster: "ap1",

      forceTLS: true

  });

  const [islogged, setIslogged] = useState(false);
  const handleLogin = () =>{
    setIslogged(true)
  }
    const [listData, setListData] = useState([])
    const [showLogin, setShowLogin] = useState(false)
    const [id, setId] = useState('')
    const handleOnClickShowLogin = (id) =>{
        setId(id)
        setShowLogin(true)

    }
    const handleOnClickCloseLogin = () => setShowLogin(false)

    const fetchListData = async () => {
        const res = await computerAPI.listCustomer();
        if (res.success) {

            setListData(res.data)

        }
        else {
            setListData([])
        }
    }
    const accessComputer = async (id) => {
        const res = await computerAPI.accessComputer(id);
        if (res.success) {


        }
        else {
            console.log('thất bại')
        }
    }

    useEffect(() => {

        fetchListData()

    }, []);


    useEffect(() => {

        // Kết nối đến Boardcast

        var channel = window.Echo.channel("my-channel");

        channel.listen(".my-event", function(res) {



            fetchListData()

        });



    }, []);


    if (localStorage.getItem("auth_token") && localStorage.getItem("type")=='customer') {
        return <Redirect to="/customer" />;
      }
    return (


        <div className="container-fluid" >

            <div className="card shadow mb-4 mt-4">
                <div className="card-body">
                    <div className="list-style">
                        <div className="list-role">
                            {
                                listData.map((item) => {
                                    return (
                                        <div className="role-item"  onClick={()=>handleOnClickShowLogin(item.id)} key={item.id}>
                                            <div className="row col-sm-12">
                                                <div className="col-sm-6">
                                                    <span>{item.name}</span>
                                                </div>
                                                <div className="col-sm-6 d-flex justify-content-end">
                                                    {
                                                        item.user == null ? <p className="text-color-green text-xs italic">Máy trống</p>
                                                         : <p className="text-color-red text-xs italic">Đã có người</p>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
            <Login show={showLogin}
                onClose={handleOnClickCloseLogin}
                id = {id}
                login={handleLogin}
            />
        </div>



    );
}




