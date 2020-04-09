import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux';

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
    return {
        projects: state.project.projects
    };
}

export default connect(mapStateToProps)(Dashboard);
