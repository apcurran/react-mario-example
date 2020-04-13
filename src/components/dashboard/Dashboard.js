import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
    render() {
        const { projects, auth } = this.props;

        if (!auth.uid) return <Redirect to="/signin" />;

        return (
            <section className="dashboard">
                <div>
                    <ProjectList projects={ projects } />
                </div>
                <div>
                    <Notifications />
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);

    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "projects" }
    ])
)(Dashboard);
