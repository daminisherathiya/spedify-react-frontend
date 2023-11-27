import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getFilePath } from '../../helpers';

function timeSince(createdAt) {
    const now = Date.now(); // Current timestamp in milliseconds
    const difference = now - createdAt; // Difference in milliseconds

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return `${seconds} seconds ago`;  // Added this line to show the working functionality to the client, remove this line once approved.

    if (seconds < 60) {
        return 'just now';
    } else if (minutes < 60) {
        // Todo: We can show "1 minute ago" instead of "1 minutes ago".
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else {
        return `${days} days ago`;
    }
}


export const ProjectCard = ({project}) => {
    const [createdAgoMessage, setCreatedAgoMessage] = useState(() => timeSince(project.createdAt));

    useEffect(() => {
        const timerId = setInterval(() => {
            setCreatedAgoMessage(timeSince(project.createdAt));
        }, 1000);  // Todo: Set to 60 seconds

        return () => {
            clearInterval(timerId);  // Clear the previous interval when the component unmounts.
        }
    }, [project.createdAt]);

    return <div key={project._id} className="col-md-6 col-lg-12 col-xl-6">
        <div className="freelance-widget widget-author">
            <div className="freelance-content">
                <Link
                    data-bs-toggle="modal"
                    to="#rating"
                    className="favourite"
                >
                    <i className="fas fa-star" />
                </Link>
                <div className="author-heading">
                    <div className="profile-img">
                        <Link to="#">
                            <img src={getFilePath(project.createdBy.picture)} alt="author" />
                        </Link>
                    </div>
                    <div className="profile-name">
                        <div className="author-location">
                            {project.title}{" "}
                            <i className="fas fa-check-circle text-success verified" />
                        </div>
                    </div>
                    <div className="freelance-info">
                        <h3>
                            <Link to="#">{project.description ? project.description : "-"}</Link>
                        </h3>
                        <div className="freelance-location mb-1">
                            <i className="fas fa-clock" /> {createdAgoMessage}
                        </div>
                        <div className="freelance-location">
                            <i className="fas fa-map-marker-alt me-1" />
                            {project.location}
                        </div>
                    </div>
                    <div className="freelance-tags">
                        {project.skills.map(skill => (
                            <Link key={skill._id} to="">
                                <span className="badge badge-pill badge-design">
                                    {skill.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="freelancers-price">{project.fixedPrice ? `$${project.fixedPrice}` : `$${project.hourlyMin}-$${project.hourlyMax}`}</div>
                </div>
                <div className="counter-stats">
                    <ul>
                        <li>
                             {/* Todo: Discuss whether to show 27 or 28 for 27.5? */}
                             {/* Todo: Make it dynamic similar to createdAt */}
                            <h3 className="counter-value">{Math.floor((project.expiresIn - Date.now()) / (1000 * 60 * 60 * 24))} Days Left</h3>
                            <h5>Expiry</h5>
                        </li>
                        <li>
                            <h3 className="counter-value">{project.proposals.length}</h3>
                            <h5>Proposals</h5>
                        </li>
                        <li>
                            <h3 className="counter-value">
                                <span className="jobtype">Full Time</span>
                            </h3>
                            <h5>Job Type</h5>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cart-hover">
                <Link
                    to="/project-details"
                    className="btn-cart"
                    tabIndex={-1}
                >
                    Bid Now
                </Link>
            </div>
        </div>
    </div>
};
