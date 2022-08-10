import React from "react";
import Clock from "./Clock";
import logo from "../images/PM_OVERVIEW.png"

export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt="logo" className="nav--logo"></img>
            <h1 className="clock">The current time is: <Clock/></h1>
        </nav>
    )
}