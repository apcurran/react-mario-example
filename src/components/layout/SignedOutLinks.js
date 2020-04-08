import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
    return (
        <ul className="nav__links-list">
            <li className="nav__links-item">
                <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li className="nav__links-item">
                <NavLink to="/signin">Log In</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLinks;