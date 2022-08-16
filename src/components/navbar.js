import React from "react";
import Logo from '../images/PULogo.png'

export default function Navbar() {

    return (
    <nav>  
        <div className="Home">
            <img src={Logo} height="70px"/>
            <p className="Name">Dota 2 Club</p>
        </div>
        <li>
            <ul>About Us</ul>
            <ul>Teams</ul>
            <ul>Contact Us</ul>
        </li>
    </nav>
    )
}