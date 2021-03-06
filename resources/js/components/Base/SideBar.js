import { Link, Route } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { useEffect, useState } from 'react';



function Sidebar(props) {

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);



    return (
        <Accordion className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isOpen ? 'toggled' : ''}`} id="sidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/system" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fab fa-react"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Tiệm nét</div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <Link className="nav-btn nav-link" to="/system"><i className="fas fa-home"></i>
                    <span>Quản lý máy tính</span></Link>
            </li>
            <hr className="sidebar-divider" />
            <li className={isOpen ? 'nav-item hover' : 'nav-item'}>
                <Accordion.Toggle className="nav-btn nav-link collapsed" variant="link" eventKey={isOpen ? '' : '1'}>
                    <i className="fas fa-home"></i>
                    <span>Thống kê</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link to='/system/order-statistics' className="collapse-item" >Thống kê bán hàng</Link>
                        <Link to='/system' className="collapse-item" >Thống kê giờ chơi</Link>
                        <Link to='/system' className="collapse-item" >Thống kê tổng</Link>
                    </div>
                </Accordion.Collapse>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <a className="nav-btn nav-link" to="/system" onClick={props.logout()}><i className="fas fa-home"></i>
                    <span>Đăng xuất</span></a>
            </li>
            <div className="text-center d-none d-md-inline" id="buttonsidebar">
                <button onClick={() => toggle()} className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </Accordion>


    );
}

export default Sidebar;