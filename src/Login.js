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
                src="https://ci4.googleusercontent.com/proxy/Yd2KsTl_n2bRuwKvPMV2FCbhrwVqGYVlPB1Bzf3ARMEBQOoKojVfqTMGpKkCEDI6_ZwQDGM2KwwYdCWFu08jQ_1RnwR88bLIW7prvHD745tKpAYiVO5dKrKR_O1xW08CRxcat2aeWTXomfffZkH31YQUgSnXK-vs=s0-d-e1-ft#https://www.freelogodesign.org/file/app/client/thumb/2186a4a6-b3e1-46b6-8e68-f4175dc6adaf_200x200.png"
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
