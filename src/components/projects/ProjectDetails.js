import React from 'react';

function ProjectDetails(props) {
    const { id } = props.match.params;
    console.log(id);

    return (
        <div className="project-details">
            <article className="card project">
                <div className="project__info">
    <h3 className="card__title project__info__title">Project Title - { id }</h3>
                    <p className="card__content project__info__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, illo! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos, ut nostrum amet voluptatum aspernatur ratione ea expedita architecto exercitationem labore ullam quam numquam nesciunt possimus magnam unde eos iste.</p>
                </div>
                <div className="project__footer">
                    <p className="project__footer__title">Posted by Alex Curran</p>
                    <p className="project__footer__date">April 8, 2020</p>
                </div>
            </article>
        </div>
    )
}

export default ProjectDetails;
