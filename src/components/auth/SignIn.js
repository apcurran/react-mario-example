import React, { Component } from 'react';

export default class SignIn extends Component {
    state = {

    };

    handleChange = (event) => {
        console.log(event);
    }

    handleSubmit = (event) => {
        console.log(event);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={ this.handleSubmit } className="form">
                    <h3 className="form__title">Sign In</h3>
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
                </form>
            </div>
        )
    }
}

