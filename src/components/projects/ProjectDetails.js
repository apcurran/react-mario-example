import React from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

function ProjectDetails(props) {
    const { project, auth } = props;

    if (!auth.uid) return <Redirect to="/signin" />

    if (project) {
        return (
            <div className="project-details">
                <article className="card project">
                    <div className="project__info">
        <h3 className="card__title project__info__title">{ project.title }</h3>
        <p className="card__content project__info__content">{ project.content }</p>
                    </div>
                    <div className="project__footer">
        <p className="project__footer__title">{ project.authorFirstName } { project.authorLastName }</p>
                        <p className="project__footer__date">April 8, 2020</p>
                    </div>
                </article>
            </div>
        )
    } else {
        return (
            <div className="container">
                <p>Loading project ...</p>
            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;

    return {
        project,
        auth: state.firebase.auth
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        { collection: "projects", doc: props.match.params.id }
    ])
)(ProjectDetails);
