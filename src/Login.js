import React from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';
import {useState} from "react";


function Login() {

    const history = useHistory();
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");

    const login = (event) => {
        event.preventDefault(); //This stops the page to refresh
        //login logic
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                //logged in, redirect to homepage
                history.push("/");
            })
            .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault(); //This stops the page to refresh
        //register logic
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //created a user and logged in...
                history.push("/");
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                src="https://api.freelogodesign.org/files/fd2f5af3b93c4e41981d98dc8db6c1bb/thumb/logo_200x200.png?v=637551858220000000"
                alt=""
                />
            </Link>
            
            <div className="login__container">
                <h1>Login</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                By continuing, you agree to Medination's Conditions of Use and Privacy Notice.
                </p>
                <br></br>

                <button onClick={register} className="login__registerButton">Create your MediNation account</button>
            </div>
        </div>
    );
}

export default Login;
