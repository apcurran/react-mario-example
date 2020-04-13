import React, { Component } from 'react';
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
    state = {
        email: null,
        password: null
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const { authError, auth } = this.props;

        if (auth.uid) return <Redirect to="/" />

        return (
            <div className="container">
                <form onSubmit={ this.handleSubmit } className="form">
                    <h3 className="form__title">Log In</h3>
                    <div className="form__group">
                        <label htmlFor="email" className="form__group__label">Email</label>
                        <input onChange={ this.handleChange } type="email" name="email" id="email" className="form__group__input"/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="password" className="form__group__label">Password</label>
                        <input onChange={ this.handleChange } type="password" name="password" id="password" className="form__group__input"/>
                    </div>
                    <div className="form__group">
                        <button type="submit" className="form__group__submit">Log In</button>
                    </div>
                    <div className="form__group">
        { authError ? <p className="error">{ authError }</p> : null }
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);