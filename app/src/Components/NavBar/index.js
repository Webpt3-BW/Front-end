import React from "react";
import {Link} from 'react-router-dom';

function Navbar(props) {

    return (
        <>
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/team">Team</Link>
            <Link className="navbar-item" to="/login">Login</Link>
            <Link className="navbar-item" to="/register">Register</Link>
            <Link className="navbar-item" to="/dashboard">Game</Link>
        </>
    )

}
export default Navbar;