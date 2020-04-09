import React from "react";

function ProjectSummary({ project }) {
    return (
        <article className="card">
            <h3 className="card__title">{ project.title }</h3>
            <p className="card__posted-by">Posted by Alex Curran</p>
            <p className="card__post-date">April 7, 2020</p>
        </article>
    )
}

export default ProjectSummary;