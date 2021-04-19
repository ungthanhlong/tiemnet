
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import isEmpty from 'validator/lib/isEmpty';
import loginAPI from '../../api/login';
import {addType , addData, addToken, addComputer } from "../../actions/token";
function Login(props) {

    const dispatch = useDispatch();

    const createToken = () => {
        const getToken = localStorage.getItem('token');
        const getType = localStorage.getItem('type');
        const getData = JSON.parse(localStorage.getItem('user'))
        const getComputer = localStorage.getItem('computer');

        const action1 = addToken(getToken);
        const action2 = addData(getData);
        const action3 = addType(getType);
        const action4 = addComputer(getComputer);
        dispatch(action1);
        dispatch(action2);
        dispatch(action3);
        dispatch(action4);
    }



    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [validationMsg, setValidationMsg] = useState('');

    const handleChangUser = (event) => {
        let val = event.target.value;
        setName(val)
    }
    const handleChangPass = (event) => {
        let val = event.target.value;
        setPassword(val)
    }

    const validateAll = () => {
        const msg = {}

        if (isEmpty(name)) {
            msg.name = "Nhập username"
        }
        if (isEmpty(password)) {
            msg.password = "Nhập password"
        }

        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) return false
        return true
    }

    const onCreate = () => {
        const isValid = validateAll()
        if (isValid) return login()
    }

    const login = async () => {

        const id = props.id
        const data = {
            id,
            name,
            password
        }
        const res = await loginAPI.loginCustomer(data);
        if (res.success) {
            console.log(res.success)
            localStorage.setItem("auth_token", true);
            localStorage.setItem("user", JSON.stringify(res.data));
            localStorage.setItem("token", res.token);
            localStorage.setItem("type", res.type);
            localStorage.setItem("computer", res.computer);
            createToken()
            props.login()
        }
        else {
            alert(res.message)
        }
    };

    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            login()
        }
    }

    if (localStorage.getItem("auth_token") && localStorage.getItem("type") == 'customer') {
        return <Redirect to="/customer" />;
    }


    return (
        <>

            <Modal show={props.show} animation={false} onHide={props.onClose}>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group >
                            <Form.Label>UserName</Form.Label>
                            <Form.Control type="text" placeholder="UserName" onChange={(event)=>handleChangUser(event)} />
                            <Form.Text className="text-color-red text-muted">
                                {validationMsg.name}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="********" onChange={(event)=>handleChangPass(event)} onKeyPress={(event) => handleKeyPress(event)}/>
                            <Form.Text className="text-color-red text-muted ">
                                {validationMsg.password}
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="row col-sm-12">
                        <div className="col-4">
                            <Button variant="secondary" >
                                Khách vãn lai
                    </Button>
                        </div>
                        <div className="col-8 d-flex justify-content-end">

                            <Button variant="primary" onClick={onCreate}>
                                Đăng nhập
                    </Button>
                        </div>
                    </div>

                </Modal.Footer>
            </Modal>


        </>
    );
}
export default Login;
