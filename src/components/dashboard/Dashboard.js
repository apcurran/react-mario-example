import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from "../projects/ProjectList";

export default class Dashboard extends Component {
    render() {
        return (
            <section className="dashboard">
                <div>
                    <ProjectList />
                </div>
                <div>
                    <Notifications />
                </div>
            </section>
        )
    }
}
