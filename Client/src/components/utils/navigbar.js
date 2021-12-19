import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "../../css/Navigbar.css";
//import ReactDOM from 'react-dom';


class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            click: false,
        }
    }
    // const[click, setClick] = React.useState(false);
    setClick = () => {
        this.setState({
            click: true,
        })
    }

    handleClick = () => this.setClick(!this.click);
    Close = () => this.setClick(false);

    render() {
        return (
            <div>
                <div className={this.click ? "main-container" : ""} onClick={() => this.Close()} />
                <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                    <div className="nav-container">

                        {this.props.children}

                        <ul className={this.click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={this.click ? this.handleClick : null}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/upload"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={this.click ? this.handleClick : null}
                                >
                                    Upload
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/contact"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={this.click ? this.handleClick : null}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/login"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={this.click ? this.handleClick : null}
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={this.handleClick}>
                            <i className={this.click ? "fa fa-times" : "fa fa-bars"}></i>
                        </div>
                    </div>
                </nav>
            </ div >
        );
    }
}

export default NavBar;