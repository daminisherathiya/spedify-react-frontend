import React from "react";
import { Link } from "react-router-dom";
import "nouislider/distribute/nouislider.css";
import 'react-select2-wrapper/css/select2.css';
import {
  Avatar_1,
} from "../imagepath";
import Button from "./Button";

const ListUser = ({ user, openChat }) => {
  return <div className="list-book-mark book-mark favour-book">
    <div className="row">
      <div className="col-lg-12">
        <div className="card list-develop-group">
          <div className="about-author d-flex align-items-center">
            <div className="about-list-author d-flex align-items-center">
              <div className="about-author-img">
                <div className="author-img-wrap">
                  <Link to="company-profile.html">
                    <img
                      className="img-fluid"
                      alt=""
                      src={Avatar_1}
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
                    UI/UX Designer
                  </div>
                  <div className="freelance-location">
                    <i className="fas fa-map-marker-alt me-1" />
                    Alabama, USA
                  </div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star " />
                    <i className="fas fa-star" />
                    <span className="average-rating">4.7 (32)</span>
                  </div>
                  <div className="freelance-tags">
                    <Link to="#">
                      <span className="badge badge-pill badge-design">
                        Web Design
                      </span>
                    </Link>
                    <Link to="#">
                      <span className="badge badge-pill badge-design">
                        UI Design
                      </span>
                    </Link>
                    <Link to="#">
                      <span className="badge badge-pill badge-design">
                        Node Js
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