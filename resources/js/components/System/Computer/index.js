import React, { useEffect, useState } from 'react';
import computerAPI from "../../../api/computer";
import { ToastContainer } from "react-toastify";
import Echo from "laravel-echo";
import { Redirect } from 'react-router';

import Notifica from '../../Common/Notifica';

export default function Computer() {

    window.Pusher = require("pusher-js");

    window.Echo = new Echo({

        broadcaster: "pusher",

        key: "1a14666e78c2f14f00ec",

        cluster: "ap1",

        forceTLS: true

    });


    const [listData, setListData] = useState([])
    const [showLogin, setShowLogin] = useState(false)

    const handleOnClickShowLogin = () => setShowLogin(true)
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

        channel.listen(".AccessComputerEvent", function (res) {

            Notifica('error', res.message)
            fetchListData()
            console.log(res)

        });

        channel.listen(".ExitComputerEvent", function (res) {

            Notifica('success', res.message)
            fetchListData()
            console.log(res)

        });

        channel.listen(".OrderEvent", function (res) {

            Notifica('order', res.message)
            console.log(res)

        });



    }, []);



    return (


        <div className="container-fluid" >

            <div className="card shadow mb-4 mt-4">
                <div className="card-body">
                    <div className="list-style">
                        <div className="list-role">
                            {
                                listData.map((item) => {
                                    return (
                                        <div className="role-item" onClick={handleOnClickShowLogin} key={item.id}>
                                            <div className="row col-sm-12">
                                                <div className="col-sm-6">
                                                    <span>{item.name}</span>
                                                </div>
                                                <div className="col-sm-6 d-flex justify-content-end">
                                                    {
                                                        item.user == null ? <p className="text-color-green text-xs italic">Máy trống</p>
                                                            : <p className="text-color-red text-xs italic">{item.user.name}</p>
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

            <ToastContainer
                pauseOnFocusLoss={false}
            />
        </div>



    );
}




