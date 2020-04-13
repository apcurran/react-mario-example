import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class SignUp extends Component {
    state = {
        email: null,
        password: null,
        firstName: null,
        lastName: null
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const { auth } = this.props;

        if (auth.uid) return <Redirect to="/" />

        return (
            <div className="container">
                <form onSubmit={ this.handleSubmit } className="form">
                    <h3 className="form__title">Sign Up</h3>
                    <div className="form__group">
                        <label htmlFor="email" className="form__group__label">Email</label>
                        <input onChange={ this.handleChange } type="email" name="email" id="email" className="form__group__input"/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="password" className="form__group__label">Password</label>
                        <input onChange={ this.handleChange } type="password" name="password" id="password" className="form__group__input"/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="firstName" className="form__group__label">First Name</label>
                        <input onChange={ this.handleChange } type="text" name="firstName" id="firstName" className="form__group__input"/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="lastName" className="form__group__label">Last Name</label>
                        <input onChange={ this.handleChange } type="text" name="lastName" id="lastName" className="form__group__input"/>
                    </div>
                    <div className="form__group">
                        <button type="submit" className="form__group__submit">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.firebase.auth
    };
}

export default connect(mapStateToProps)(SignUp);