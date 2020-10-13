import React from 'react';
import './Navbar.css'
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
       <div>
           <img className="Logo" src={logo} alt=""/>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 " href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a id="LoginBtn" className="nav-link mr-5 text-white" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
       </div>
    );
};

export default Navbar;