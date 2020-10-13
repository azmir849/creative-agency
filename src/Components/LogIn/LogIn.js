import React from 'react';
import './LogIn.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/logos/logo.png'

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
    return (
        <div>
            <div>
                <img className="LogInLogo" src={Logo} alt=""/>
            </div>
            <div className="d-flex justify-content-center LogInArea">
                <div className="flex-column d-flex justify-content-center LogInActivityArea">
                    <h3>Login With</h3>
                    <button  className="LoginButton ">Continue with Google</button>
                    <pre>Don't have an account? <Link to="/register">Create an account</Link></pre>
                </div>
            </div>
        </div>
    );
};

export default LogIn;