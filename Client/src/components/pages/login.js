import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import "../../css/login.css";
import NavBar from '../utils/navigbar';

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, 
                password
            })
        });

        const data = await res.json();
        console.log(res.status);
        console.log(data.error);

        if(res.status === 422 || data.error==="Incomplete Data"){
            window.alert("Invalid registration!");
            console.log("Invalid registration");
        } else {
            window.alert("Registration Successfull");
            console.log("Registration Successful");

            navigate('/');
        }
    }

    return (
        <>
            <NavBar>
                <NavLink exact to="/" className="nav-logo">
                    MemeMart
                    <i class="far fa-grin-tears"></i>
                </NavLink>
            </NavBar>
            <div className="container">
                <div className="form-box">
                    <div className="header-form">
                        <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                        <div className="image">
                        </div>
                    </div>
                    <div className="body-form">
                        <form method="POST">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="button" className="btn btn-secondary btn-block" onClick={loginUser} >LOGIN</button>
                            <div className="mb-3">
                                <div><a href="/signup" className='text-align-center'>Create an account?</a></div>
                            </div>
                            <div className="message">
                                <div><input type="checkbox" /> Remember Me</div>
                                <div><a href="#">Forgot your password</a></div>
                            </div>
                        </form>
                        <div className="social">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter-square"></i></a>
                            <a href="#"><i className="fab fa-google"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
