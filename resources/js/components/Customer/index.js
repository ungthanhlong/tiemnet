import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router';

import loginAPI from '../../api/login';
import Menu from './menu';
import { ToastContainer } from "react-toastify";


function Computer() {



    const computer = useSelector(state => state.token.computer)

    const [isLogOut, setIsLogOut] = useState(false);

    const logOut = async () => {
        const res = await loginAPI.logoutCustomer();
        if(res.success){
            localStorage.clear();
            setIsLogOut(true)
        }
        else{
            alert(res.message)
        }
    }

    const [showMenu,setShowMenu] = useState(false)
    const handleOnShowMenu = () => setShowMenu(true)
    const handleOnCloseMenu = () => setShowMenu(false)


    if (isLogOut) {
        return <Redirect to="/" />;
      }
    return (


        <div className="container-fluid" >
            <div className="card shadow mb-4 mt-4">
                <div className="card-header" id="card">
                    <div className="row" id="functions">
                        <div className="col-sm-9">
                            <h3>{computer}</h3>
                        </div>
                        <div className="col-sm-3 d-flex justify-content-end">
                            <a type="button" className="btn btn-dark mr-3 " onClick={logOut}>Đăng xuất</a>
                        </div>

                    </div>
                </div>
                <div className="card-body">
                <div className="col-sm-12">
                            <a type="button" className="btn btn-dark mr-3 " onClick={()=>handleOnShowMenu()} ><i className="fas fa-plus iconleft"
                            ></i>Đặt đồ ăn</a>
                        </div>

                </div>
            </div>

            <Menu show={showMenu}
                onClose={handleOnCloseMenu}
            />
 <ToastContainer
                pauseOnFocusLoss={false}
            />
        </div>



    );
}

export default withRouter(Computer)




