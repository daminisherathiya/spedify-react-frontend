import React from "react";
import { Link } from "react-router-dom";
import "nouislider/distribute/nouislider.css";
import 'react-select2-wrapper/css/select2.css';
import {
    Avatar_1,
} from "../imagepath";
import Button from "./Button";

const GridUser = ({ user, openChat }) => {
    return <div className="col-md-6 col-lg-6 col-xl-4">
        <div className="freelance-widget">
            <div className="freelance-content">
                <Link
                    data-bs-toggle="modal"
                    to="#rating"
                    className="favourite favourited"
                >
                    <i className="fas fa-star" />
                </Link>
                <div className="freelance-img">
                    <Link to={`/userDetails/${user._id}`}>
                        <img
                            src={Avatar_1}
                            alt="User Image"
                        />
                        <span className="verified">
                            <i className="fas fa-check-circle" />
                        </span>
                    </Link>
                </div>

                <div className="freelance-info">
                    <h3>
                        <Link to={`/developer-details/${user._id}`}>{user.username}</Link>
                    </h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="freelance-location">
                        <i className="fas fa-map-marker-alt me-1" />
                        Alabama, USA
                    </div>
                    <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="average-rating">4.7 (32)</span>
                    </div>
                    <div className="freelance-tags">
                        <Link to="javascript:void(0);">
                            <span className="badge badge-pill badge-design">
                                Web Design
                            </span>
                        </Link>
                        <Link to="javascript:void(0);">
                            <span className="badge badge-pill badge-design">
                                UI Design
                            </span>
                        </Link>
                        <Link to="javascript:void(0);">
                            <span className="badge badge-pill badge-design">
                                Node Js
                            </span>
                        </Link>
                    </div>
                    <div className="freelancers-price">$25 Hourly</div>
                </div>
            </div>
            <Button onClick={openChat} />
        </div>
    </div>
}
export default GridUser;