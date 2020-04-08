import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLinks() {
    return (
        <ul className="nav__links-list">
            <li className="nav__links-item">
                <NavLink to="/create">New Project</NavLink>
            </li>
            <li className="nav__links-item">
                <NavLink to="/">Log Out</NavLink>
            </li>
            <li className="nav__links-item">
                <NavLink to="/" className="name-badge">AC</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;