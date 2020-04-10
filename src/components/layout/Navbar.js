import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

function Navbar(props) {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="nav__logo">MarioPlan</Link>
                { links }
            </nav>
        </header>
    )
}

function mapStateToProps(state) {
    return {
        auth: state.firebase.auth
    };
}

export default connect(mapStateToProps)(Navbar);