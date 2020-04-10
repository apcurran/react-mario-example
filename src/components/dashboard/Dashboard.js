import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
    render() {
        const { projects } = this.props;

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
        projects: state.firestore.ordered.projects
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "projects" }
    ])
)(Dashboard);
