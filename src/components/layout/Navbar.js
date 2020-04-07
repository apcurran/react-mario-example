import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Navbar() {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="nav__logo">MarioPlan</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </nav>
        </header>
    )
}

export default Navbar;