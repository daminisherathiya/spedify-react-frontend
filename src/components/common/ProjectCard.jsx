import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useEnumsContext } from "../../context/EnumsContext";
import { getFilePath } from '../../helpers';

const getCreatedAgoMessage = (createdAt) => {
    const now = Date.now(); // Current timestamp in milliseconds
    const difference = now - createdAt; // Difference in milliseconds

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
        return 'just now';
    } else if (minutes < 60) {
        return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    } else if (hours < 24) {
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else {
        return days === 1 ? '1 day ago' : `${days} days ago`;
    }    
}

const getExpiryMessage = (expiresIn) => {
    const now = Date.now(); // Current timestamp in milliseconds
    const difference = expiresIn - now; // Difference in milliseconds

    // If the expiry time is in the past
    if (difference <= 0) {
        return 'Expired';
    }

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
        return 'Less than a minute';
    } else if (minutes < 60) {
        return minutes === 1 ? '1 minute' : `${minutes} minutes`;
    } else if (hours < 24) {
        return hours === 1 ? '1 hour' : `${hours} hours`;
    } else {
        return days === 1 ? '1 day' : `${days} days`;
    }
}

const getPricingTypeText = (pricingTypes, pricingTypeValue) => {
    const type = pricingTypes.find(pt => pt.value === pricingTypeValue);
    return type ? type.text : '-';
}


export const ProjectCard = ({project}) => {
    const { enumsState } = useEnumsContext();
    const [createdAgoMessage, setCreatedAgoMessage] = useState(() => getCreatedAgoMessage(project.createdAt));
    const [expiryMessage, setExpiryMessage] = useState(() => getExpiryMessage(project.expiresIn));

    useEffect(() => {
        const timerId = setInterval(() => {
            setCreatedAgoMessage(getCreatedAgoMessage(project.createdAt));
        }, 60000);

        return () => {
            clearInterval(timerId);  // Clear the previous interval when the component unmounts.
        }
    }, [project.createdAt]);

    useEffect(() => {
        const timerId = setInterval(() => {
            setExpiryMessage(getExpiryMessage(project.expiresIn));
        }, 60000);

        return () => {
            clearInterval(timerId);  // Clear the previous interval when the component unmounts.
        }
    }, [project.expiresIn]);

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
                            <img src={getFilePath(project.createdBy.picture, true)} alt="author" />
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
                            <h3 className="counter-value">{expiryMessage}</h3>
                            <h5>Expiry</h5>
                        </li>
                        <li>
                            <h3 className="counter-value">{project.proposals.length}</h3>
                            <h5>Proposals</h5>
                        </li>
                        <li>
                            <h3 className="counter-value">
                                <span className="jobtype">{getPricingTypeText(enumsState.PricingTypes || [], project.pricingType)}</span>
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
