import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

function SignedInLinks(props) {
    return (
        <ul className="nav__links-list">
            <li className="nav__links-item">
                <NavLink to="/create">New Project</NavLink>
            </li>
            <li className="nav__links-item">
                <a onClick={ props.signOut }>Log Out</a>
            </li>
            <li className="nav__links-item">
                <NavLink to="/" className="name-badge">AC</NavLink>
            </li>
        </ul>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(signOut())
    };
}

export default connect(null, mapDispatchToProps)(SignedInLinks);