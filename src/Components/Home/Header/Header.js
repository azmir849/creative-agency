  
import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <main>
            <div className="Header-Container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
          </div>
        </main>
    );
};

export default Header;