

import React, { useEffect, useState } from 'react';
import { Spinner, Dropdown } from 'react-bootstrap';
import statisticsAPI from '../../../../api/statistics';
function Order() {

    const [loading, setLoading] = useState(true)
    const [listData, setListData] = useState([])


    const fetchData = async () => {
        const res = await statisticsAPI.order();
        if (res.success) {

            setListData(res.data)
        }
        else {
            setListData([])
        }
        setLoading(false)
    }

    useEffect(() => {

        fetchData()

    }, []);

    let day = ""
    let total = 0
    return (
        <div className="container-fluid" >
            <div className="card shadow mb-4 mt-4">
                <div className="card-body">
                    <table id="table">
                        <thead>
                            <tr>
                                <th style={{ width: "5%" }}></th>
                                <th className="text-left" style={{ width: "10%" }}>Máy</th>
                                <th className="text-left" style={{ width: "15%" }}>Người dùng</th>
                                <th className="text-left" style={{ width: "15%" }}>Đồ ăn</th>
                                <th className="text-left" style={{ width: "10%" }}>Giá</th>
                                <th className="text-left" style={{ width: "10%" }}>Số lượng</th>
                                <th className="text-left" style={{ width: "10%" }}>Tổng tiền</th>
                                <th className="text-left" style={{ width: "10%" }}></th>
                                <th className="text-left" style={{ width: "10%" }}>Thời gian</th>
                                <th style={{ width: "5%" }}></th>
                            </tr>
                        </thead>
                        <tbody className="ab">
                            {loading ? <tr><td className="text-center " colSpan="7"><Spinner animation="border" /></td></tr> : listData.map((item, i) => {


                                if (item.updated_at.slice(0, 10) != day) {
                                    day = item.updated_at.slice(0, 10)
                                    const totaltemp = total
                                    total = item.total * item.menu.price
                                    return (
                                        <>
                                            {
                                                totaltemp == 0 ? '' :
                                                    <tr>
                                                        <td className="text-right " colSpan="7">
                                                            <h6 className="mr-5">Tổng cộng : {totaltemp}</h6>
                                                        </td>
                                                    </tr>
                                            }

                                            <tr><td className="text-left time " colSpan="7"><h4 className="ml-4">{item.updated_at.slice(0, 10)}</h4></td></tr>
                                            <tr key={item.id}>
                                                <td className="text-center" style={{ width: "5%" }} ></td>
                                                <td style={{ width: "10%" }} className="text-left">{item.computer.name}</td>
                                                <td style={{ width: "15%" }} className="text-left">{item.user.name}</td>
                                                <td style={{ width: "15%" }} className="text-left">{item.menu.name}</td>
                                                <td style={{ width: "10%" }} className="text-left">{item.menu.price}</td>
                                                <td style={{ width: "10%" }} className="text-left">{item.total}</td>
                                                <td style={{ width: "10%" }} className="text-left">{item.total * item.menu.price}</td>
                                                <td style={{ width: "10%" }} className="text-left"></td>
                                                <td style={{ width: "10%" }} className="text-left">{parseInt(item.updated_at.slice(12, 13)) + 7}{item.updated_at.slice(13, 19)}</td>
                                                <td className="text-center" style={{ width: "5%" }}>
                                                    <Dropdown >
                                                        <Dropdown.Toggle bsPrefix variant id="dropdown-basic" className="btn-none">
                                                            <i className="fas fa-align-justify"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu >
                                                            <Dropdown.Item >Sửa</Dropdown.Item>
                                                            <Dropdown.Item >Xóa</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                }
                                else {
                                    total += parseInt(item.total * item.menu.price)
                                    return (
                                        <tr key={item.id}>
                                            <td className="text-center" style={{ width: "5%" }} ></td>
                                            <td style={{ width: "10%" }} className="text-left">{item.computer.name}</td>
                                            <td style={{ width: "15%" }} className="text-left">{item.user.name}</td>
                                            <td style={{ width: "15%" }} className="text-left">{item.menu.name}</td>
                                            <td style={{ width: "10%" }} className="text-left">{item.menu.price}</td>
                                            <td style={{ width: "10%" }} className="text-left">{item.total}</td>
                                            <td style={{ width: "10%" }} className="text-left">{item.total * item.menu.price}</td>
                                            <td style={{ width: "10%" }} className="text-left"></td>
                                            <td style={{ width: "10%" }} className="text-left">{(parseInt(item.updated_at.slice(12, 13)) + 7)}{item.updated_at.slice(13, 19)}</td>
                                            <td className="text-center" style={{ width: "5%" }}>
                                                <Dropdown >
                                                    <Dropdown.Toggle bsPrefix variant id="dropdown-basic" className="btn-none">
                                                        <i className="fas fa-align-justify"></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu >
                                                        <Dropdown.Item >Sửa</Dropdown.Item>
                                                        <Dropdown.Item >Xóa</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    )
                                }


                            })
                            }
                            {
                                total == 0 ? '' :
                                    <tr>
                                        <td className="text-right " colSpan="7">
                                            <h6 className="mr-5">Tổng cộng : {total}</h6>
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    );
}

export default Order;
