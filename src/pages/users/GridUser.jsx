import React from "react";
import { Link } from "react-router-dom";
import "nouislider/distribute/nouislider.css";
import 'react-select2-wrapper/css/select2.css';
import {
    Avatar_1,
} from "../../components/imagepath";
import Button from "../../components/Button";
import { BASE_URL } from "../.././keys";
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const num = randomNumber(5, 1);
const ratingStars = () => {
    const stars = [];
    for (let index = 0; index < num; index++) {
        stars.unshift(<i className="fas fa-star filled" />)
    }
    if (num < 5) {
        for (let j = 0; j < (5 - num); j++) {
            stars.push(<i className="fas fa-star" />)
        }
    }
    return stars;
}
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
                            src={`${BASE_URL}/${user.picture.files.find((file, index) => index === 0).path}`}
                            alt="User Image"
                        />
                        <span className="verified">
                            <i className="fas fa-check-circle" />
                        </span>
                    </Link>
                </div>

                <div className="freelance-info">
                    <h3>
                        <Link to={`/developer-details/${user._id}`}>{`${user.username}`.charAt(0).toUpperCase() + user.username.slice(1)}</Link>
                    </h3>
                    <div className="freelance-specific">{user.tagline}</div>
                    <div className="freelance-location">
                        <i className="fas fa-map-marker-alt me-1" />
                        {`${user.state}`}
                    </div>
                    <div className="rating">
                        {ratingStars()}
                        <span className="average-rating">{`${num}.${randomNumber(10, 1)} (${randomNumber(100, 10)})`} </span>
                    </div>
                    <div className="freelance-tags">
                        <Link to="javascript:void(0);">
                            <span className="badge badge-pill badge-design">
                                Skill 1
                            </span>
                        </Link>
                        <Link to="javascript:void(0);">
                            <span className="badge badge-pill badge-design">
                                Skill 2

                            </span>
                        </Link>
                        <Link to="javascript:void(0);">
                            <span className="badge badge-pill badge-design">
                                Skill 3
                            </span>
                        </Link>
                    </div>
                    <div className="freelancers-price">{`$${Math.floor(Math.random() * (100 - 20 + 1)) + 20} Hourly`}</div>
                </div>
            </div>
            <Button onClick={openChat} />
        </div>
    </div>
}
export default GridUser;