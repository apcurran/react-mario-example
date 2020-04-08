import React, { Component } from 'react';

export default class CreateProject extends Component {
    state = {
        title: null,
        content: null
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
        return (
            <div className="container">
                <form onSubmit={ this.handleSubmit } className="form">
                    <h3 className="form__title">Create Project</h3>
                    <div className="form__group">
                        <label htmlFor="title" className="form__group__label">Title</label>
                        <input onChange={ this.handleChange } type="text" name="title" id="title" className="form__group__input"/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="content" className="form__group__label">Project Content</label>
                        <textarea onChange={ this.handleChange } name="content" id="content" cols="30" rows="5" className="form__group__input"></textarea>
                    </div>
                    <div className="form__group">
                        <button type="submit" className="form__group__submit">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

