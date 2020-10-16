import React, { useContext, useState } from 'react';
import './LogIn.css'
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../images/logos/logo.png'

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';


const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/order" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    })
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                storeAuthToken();
            }).catch(error => {
                console.log(error);
                console.log(error.message);
            });
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <div>
            <div>
                <img className="LogInLogo" src={Logo} alt="" />
            </div>
            <div className="d-flex justify-content-center LogInArea">
                <div className="flex-column d-flex justify-content-center LogInActivityArea">
                    <h3>Login With</h3>
                    <button onClick={handleSignIn} className="LoginButton ">Continue with Google</button>
                    <pre>Don't have an account? <Link to="/register">Create an account</Link></pre>
                </div>
            </div>
        </div>
    );
};

export default LogIn;