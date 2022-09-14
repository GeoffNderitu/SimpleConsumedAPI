import React from "react";
import { Link } from "react-router-dom";
const NavBar = () =>{
    return(
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Services">SERVICES</Link>
                <Link to="/Contact">CONTACT</Link>
                <Link to="/About">ABOUT</Link>
                <Link to="/Login">LOGIN</Link>
                <Link to="/Register">Register</Link>
            </div>
        </nav>
    );
}

export default NavBar;