import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import "../../css/login.css";
import NavBar from '../utils/navigbar';

export default function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    let name, value;
    const handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { username, email, password } = user;

        const res = await fetch("/user/register", {
            // mode: 'cors',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        const data = await res.json();
        console.log(res.status);
        // console.log(data.error);
        //console.log(data);

        if (data.message === "user registered successfully") {
            window.alert("Registration Successfull");
            console.log("Registration Successful");

            navigate('/login');
        }
        else {
            window.alert("Invalid registration!");
            console.log("Invalid registration");
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
                                <input type="text" className="form-control" placeholder="Username" name="username" value={user.username} onChange={handleInput} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fas fa-envelope"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Email Address" name="email" value={user.email} onChange={handleInput} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Password" name="password" value={user.password} onChange={handleInput} />
                            </div>
                            <button type="button" className="btn btn-secondary btn-block mb-1" onClick={PostData}>SIGNUP</button>
                            <div className="mt-2">
                                <div><a href="/login" className='text-align-center'>Already have an account?</a></div>
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
