
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import menuAPI from '../../api/menu';
import Notifica from '../Common/Notifica';
function Menu(props) {
    const [listMenu, setListMenu] = useState([])

    const [menu, setMenu] = useState([])
    const [validationMsg, setValidationMsg] = useState('');
    const [typeMenu, setTypeMenu] = useState('Đồ uống')
    const handleTypeDrink = () => setTypeMenu('Đồ uống')
    const handleTypeDish = () => setTypeMenu('Đồ ăn')

    const fetchListMenu = async () =>{
        const res = await menuAPI.listMenu()
        if(res.success){
            setListMenu(res.data)

            let options = res.data.map(item => ({ value: item.id, total: "" }));
            setMenu(options);
        }
        else{
            setListMenu([])
        }
    }
    useEffect(() => {

        fetchListMenu()


    }, []);

    const handleMenu = (event,id) =>{

        const value = event.target.value.replace(/e/ig, '')
        setMenu((prevMenu) =>
        prevMenu.map((menu) => {
          return menu.value == id ? { ...menu, total: value } : menu;
        }),
      );
    }

    const validateAll = () => {
        const msg = {}

        if (menu.filter(item =>item.total > 0).length == 0) {
            msg.menu = "Hãy chọn món"
        }
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) return false
        return true
    }


    const onOrder = () => {
        const isValid = validateAll()
        if (isValid) return order()
    }

    const order = async () =>{

        const order = menu.filter(item =>item.total > 0)

        const data = { order }
        const res = await menuAPI.order(data)
        if(res.success){
            props.onClose()
            Notifica('success', res.message)
        }
        else{
            Notifica('error', res.message)
        }
    }


    return (
        <>

            <Modal show={props.show} animation={false} onHide={props.onClose}>
                <Modal.Header closeButton>
                <button className="btn btn-dark mr-3" onClick={handleTypeDrink}>Thức uống</button>
                    <button className="btn btn-white"  onClick={handleTypeDish}>Đồ ăn</button>

                </Modal.Header>
                <Modal.Body>
                <div className="list-style">
                        <div className="list-role-menu">
                            {
                                listMenu.map((item) => {

                                    if(item.type == typeMenu){
                                        return (
                                            <div className="role-item"  key={item.id}>
                                                <div className="row col-sm-12">
                                                    <div className="col-sm-4">
                                                        <span>{item.name}</span>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="number" onChange={(event)=>handleMenu(event,item.id)}></input>
                                                    </div>
                                                    <div className="col-sm-4 d-flex justify-content-end">
                                                            <p className="text-color-red text-xs italic">{item.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                })
                            }


                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="row col-sm-12">
                        <div className="col-4">

                        </div>
                        <div className="col-8 d-flex justify-content-end">

                            <Button variant="primary" onClick={()=>onOrder()}>
                                OK
                    </Button>
                        </div>
                    </div>

                </Modal.Footer>
            </Modal>


        </>
    );
}
export default Menu;
