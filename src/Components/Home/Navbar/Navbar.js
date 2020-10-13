import React from 'react';
import './Navbar.css'
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <div>
           <img className="Logo" src={logo} alt=""/>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home <span className="sr-only">(current)</span></Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/">Our Portfolio</Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/">Our Team</Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 " to="/">Contact Us</Link >
                    </li>
                    <li className="nav-item">
                        <Link id="LoginBtn" className="nav-link mr-5 text-white" to="/login">Login</Link >
                    </li>
                </ul>
            </div>
        </nav>
       </div>
    );
};

export default Navbar;