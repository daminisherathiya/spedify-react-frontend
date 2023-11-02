import React from "react";
import { Link } from "react-router-dom";
import "nouislider/distribute/nouislider.css";
import 'react-select2-wrapper/css/select2.css';
import {
  Avatar_1,
} from "../../components/imagepath";
import Button from "./Button";
import { BASE_URL } from "../../../keys";
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
const ListUser = ({ user, openChat }) => {
  return <div className="list-book-mark book-mark favour-book">
    <div className="row">
      <div className="col-lg-12">
        <div className="card list-develop-group">
          <div className="about-author d-flex align-items-center">
            <div className="about-list-author d-flex align-items-center">
              <div className="about-author-img">
                <div className="author-img-wrap">
                  <Link to={`/userDetails/${user._id}`}>
                    <img
                      className="img-fluid"
                      alt=""
                      src={`${BASE_URL}/${user.picture.files.find((file, index) => index === 0).path}`}
                    />
                    <span className="verified">
                      <i className="fas fa-check-circle" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="author-details">
                <div className="freelance-info">
                  <h3>
                    <Link to="company-profile.html">{user.username}</Link>
                  </h3>
                  <div className="freelance-specific">
                    {user.tagline}
                  </div>
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
                </div>
              </div>
            </div>
            <div className="develop-list-pro">
              <Link
                data-bs-toggle="modal"
                to="#rating"
                className="favourite favourited"
              >
                <i className="fas fa-star" />
              </Link>
              <div className="freelancers-price">$25 Hourly</div>
              <Button title="Chat" onClick={openChat} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default ListUser;