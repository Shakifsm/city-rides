import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import "./Login.css"
import { UserContext } from '../../App';

const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: ""
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const googleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                setLoggedInUser(user);
                history.replace(from)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    const handleBlur = (e) => {
        let isFormValid;
        if (e.target.name === "email") {
            const re = /\S+@\S+\.\S+/;
            isFormValid = re.test(e.target.value);
        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length >= 6;
            const reg = /\d{1}/;
            const passwordHasNumber = reg.test(e.target.value);

            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                    console.log(errorCode, errorMessage);
                });
        }
        e.preventDefault();
    }


    return (
        <div>
            <header>
                <ul>
                    <Link to="/home"><li>Home</li></Link>
                    <Link to="/destination"><li>Destination</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/login"><li className="login-li">Login</li></Link>
                </ul>
            </header>
            <main className="login-main">
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="parent-div">
                                <div className="login-with-email-area">
                                    <div className="title-area">
                                        <h3>Login</h3>
                                    </div>
                                    <div className="input-area">
                                        <form onSubmit={handleSubmit} action="">
                                            <input onBlur={handleBlur} type="email" name="email" id="" placeholder="Email" className="email" />
                                            <br />
                                            <br />
                                            <input onBlur={handleBlur} type="password" name="password" placeholder="Password" className="password" id="" />
                                            <br />
                                            <br />
                                            <input type="checkbox" className="remember" name="remember" id="" />
                                            <label htmlFor="remember">Remember Me</label>
                                            <br />
                                            <br />
                                            <input type="submit" className="login-input" value="Login" />
                                            <div className="sign-up d-flex">
                                                <div className="div">
                                                    <p>Don't have an account?</p>
                                                </div>
                                                <div className="create-account">
                                                    <p>Create an account</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <p className="or">---------------------------or---------------------------</p>
                                <button onClick={googleSignIn} className="google-btn"> <FontAwesomeIcon icon={faGoogle} /> Continue With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;