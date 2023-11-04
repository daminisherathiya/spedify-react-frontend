import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Flags_us, Flags_de, company_img5, company_img6, company_img7, company_img8, company_img9, company_img1, company_img2, company_img3, company_img4, company_img10 } from "../../imagepath";
import { Sidebar } from '../sidebar';

const FreelancerInvitations = (props) => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
      {/* Page Content */}
      <div className="content bookmark">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link" to="/freelancer-favourites">
                      Bookmarked Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/freelancer-invitations"
                    >
                      Invitations
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* project list */}
              <div className="my-projects-view favourite-group">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-header d-flex">
                        <h5 className="card-title">Bookmarked Projects</h5>
                        <ul className="list-grid d-flex align-items-center">
                          <li>
                            <Link to="freelancer-favourites">
                              <i className="fas fa-list" />
                            </Link>
                          </li>
                          <li>
                            <Link to="freelancer-favourites" className="favour-active">
                              <i className="fas fa-th-large" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="freelance-box book-mark bookmark-projects">
                        <div className="row">
                          <div className="col-md-12 col-lg-12 col-xl-12">
                            <div className="relavance-result d-flex align-items-center">
                              <h4>Found 455 Results</h4>
                              <div className="relavance-rate d-flex justify-content-sm-end">
                                <div className="sort-by">
                                  <label>Sort By: </label>
                                  <select className="custom-select form-select">
                                    <option>Relevance</option>
                                    <option>Rating</option>
                                    <option>Popular</option>
                                    <option>Latest</option>
                                    <option>Free</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Project Content */}
                          <div className="col-md-6 col-lg-12 col-xl-3">
                            <div className="freelance-widget widget-author">
                              <div className="freelance-content">
                                <Link
                                  data-bs-toggle="modal"
                                  to="#rating"
                                  className="favourite favourited"
                                >
                                  <i className="fas fa-star" />
                                </Link>
                                <div className="author-heading">
                                  <div className="profile-img">
                                    <Link to="project-details.html">
                                      <img
                                        src={company_img1}
                                        alt="author"
                                      />
                                      <span className="project-verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="profile-name">
                                    <div className="author-location">
                                      <Link to="project-details.html">Amaze Tech </Link>
                                    </div>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="#">UI/UX Developer</Link>
                                    </h3>
                                    <div className="freelance-location post-now mb-1">
                                      <i className="fas fa-clock" /> Posted Just Now
                                    </div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Alabama, USA
                                    </div>
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
                                  <div className="freelancers-price">$40-$500</div>
                                </div>
                                <div className="counter-stats">
                                  <ul>
                                    <li>
                                      <h5>Expiry</h5>
                                      <h3 className="counter-value">4 Days Left</h3>
                                    </li>
                                    <li>
                                      <h5>Proposals</h5>
                                      <h3 className="counter-value">15</h3>
                                    </li>
                                    <li>
                                      <h5>Job Type</h5>
                                      <h3 className="counter-value">
                                        <span className="jobtype">Full Time</span>
                                      </h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="project-details.html"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-12 col-xl-3">
                            <div className="freelance-widget widget-author">
                              <div className="freelance-content">
                                <Link
                                  data-bs-toggle="modal"
                                  to="#rating"
                                  className="favourite favourited"
                                >
                                  <i className="fas fa-star" />
                                </Link>
                                <div className="author-heading">
                                  <div className="profile-img">
                                    <Link to="project-details.html">
                                      <img
                                        src={company_img2}
                                        alt="author"
                                      />
                                      <span className="project-verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="profile-name">
                                    <div className="author-location">
                                      <Link to="project-details.html">Park INC </Link>
                                    </div>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="#">PHP Developer</Link>
                                    </h3>
                                    <div className="freelance-location post-now mb-1">
                                      <i className="fas fa-clock" /> Posted 1 min ago
                                    </div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      California, USA
                                    </div>
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
                                  <div className="freelancers-price">$30-$300</div>
                                </div>
                                <div className="counter-stats">
                                  <ul>
                                    <li>
                                      <h5>Expiry</h5>
                                      <h3 className="counter-value">5 Days Left</h3>
                                    </li>
                                    <li>
                                      <h5>Proposals</h5>
                                      <h3 className="counter-value">15</h3>
                                    </li>
                                    <li>
                                      <h5>Job Type</h5>
                                      <h3 className="counter-value">
                                        <span className="jobtype">Full Time</span>
                                      </h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="project-details.html"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-12 col-xl-3">
                            <div className="freelance-widget widget-author">
                              <div className="freelance-content">
                                <Link
                                  data-bs-toggle="modal"
                                  to="#rating"
                                  className="favourite favourited"
                                >
                                  <i className="fas fa-star" />
                                </Link>
                                <div className="author-heading">
                                  <div className="profile-img">
                                    <Link to="project-details.html">
                                      <img
                                        src={company_img3}
                                        alt="author"
                                      />
                                      <span className="project-verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="profile-name">
                                    <div className="author-location">
                                      <Link to="project-details.html">Tech Zone</Link>{" "}
                                    </div>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="#">Graphic Designer</Link>
                                    </h3>
                                    <div className="freelance-location post-now mb-1">
                                      <i className="fas fa-clock" /> Posted 30 mins ago
                                    </div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      New York, USA
                                    </div>
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
                                  <div className="freelancers-price">$15-$500</div>
                                </div>
                                <div className="counter-stats">
                                  <ul>
                                    <li>
                                      <h5>Expiry</h5>
                                      <h3 className="counter-value">4 Days Left</h3>
                                    </li>
                                    <li>
                                      <h5>Proposals</h5>
                                      <h3 className="counter-value">15</h3>
                                    </li>
                                    <li>
                                      <h5>Job Type</h5>
                                      <h3 className="counter-value">
                                        <span className="jobtype">Full Time</span>
                                      </h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="project-details.html"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-12 col-xl-3">
                            <div className="freelance-widget widget-author">
                              <div className="freelance-content">
                                <Link
                                  data-bs-toggle="modal"
                                  to="#rating"
                                  className="favourite favourited"
                                >
                                  <i className="fas fa-star" />
                                </Link>
                                <div className="author-heading">
                                  <div className="profile-img">
                                    <Link to="project-details.html">
                                      <img
                                        src={company_img4}
                                        alt="author"
                                      />
                                      <span className="project-verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="profile-name">
                                    <div className="author-location">
                                      <Link to="project-details.html">ABC Software</Link>{" "}
                                    </div>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="#">iOS Developer</Link>
                                    </h3>
                                    <div className="freelance-location post-now mb-1">
                                      <i className="fas fa-clock" /> Posted 1 day ago
                                    </div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Florida, USA
                                    </div>
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
                                  <div className="freelancers-price">$25-$250</div>
                                </div>
                                <div className="counter-stats">
                                  <ul>
                                    <li>
                                      <h5>Expiry</h5>
                                      <h3 className="counter-value">1 Days Left</h3>
                                    </li>
                                    <li>
                                      <h5>Proposals</h5>
                                      <h3 className="counter-value">13</h3>
                                    </li>
                                    <li>
                                      <h5>Job Type</h5>
                                      <h3 className="counter-value">
                                        <span className="jobtype">Full Time</span>
                                      </h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="project-details.html"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-12 col-xl-3">
                            <div className="freelance-widget widget-author">
                              <div className="freelance-content">
                                <Link
                                  data-bs-toggle="modal"
                                  to="#rating"
                                  className="favourite favourited"
                                >
                                  <i className="fas fa-star" />
                                </Link>
                                <div className="author-heading">
                                  <div className="profile-img">
                                    <Link to="project-details.html">
                                      <img
                                        src={company_img5}
                                        alt="author"
                                      />
                                      <span className="project-verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="profile-name">
                                    <div className="author-location">
                                      <Link to="project-details.html">Host Technologies</Link>
                                    </div>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="#">SEO Developer</Link>
                                    </h3>
                                    <div className="freelance-location post-now mb-1">
                                      <i className="fas fa-clock" /> Posted 3 days ago
                                    </div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Texas, USA
                                    </div>
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
                                  <div className="freelancers-price">$50-$700</div>
                                </div>
                                <div className="counter-stats">
                                  <ul>
                                    <li>
                                      <h5>Expiry</h5>
                                      <h3 className="counter-value">6 Days Left</h3>
                                    </li>
                                    <li>
                                      <h5>Proposals</h5>
                                      <h3 className="counter-value">18</h3>
                                    </li>
                                    <li>
                                      <h5>Job Type</h5>
                                      <h3 className="counter-value">
                                        <span className="jobtype">Full Time</span>
                                      </h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="project-details.html"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-12 col-xl-3">
                            <div className="freelance-widget widget-author">
                              <div className="freelance-content">
                                <Link
                                  data-bs-toggle="modal"
                                  to="#rating"
                                  className="favourite favourited"
                                >
                                  <i className="fas fa-star" />
                                </Link>
                                <div className="author-heading">
                                  <div className="profile-img">
                                    <Link to="project-details.html">
                                      <img
                                        src={company_img6}
                                        alt="author"
                                      />
                                      <span className="project-verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="profile-name">
                                    <div className="author-location">
                                      <Link to="project-details.html">Alfred Tech</Link>{" "}
                                    </div>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="#">SM Developer</Link>
                                    </h3>
                                    <div className="freelance-location post-now mb-1">
                                      <i className="fas fa-clock" /> Posted 1 week ago
                                    </div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Virginia, USA
                                    </div>
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
                                  <div className="freelancers-price">$42-$100</div>
                                </div>
                                <div className="counter-stats">
                                  <ul>
                                    <li>
                                      <h5>Expiry</h5>
                                      <h3 className="counter-value">2 Days Left</h3>
                                    </li>
                                    <li>
                                      <h5>Proposals</h5>
                                      <h3 className="counter-value">15</h3>
                                    </li>
                                    <li>
                                      <h5>Job Type</h5>
                                      <h3 className="counter-value">
                                        <span className="jobtype">Full Time</span>
                                      </h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="project-details.html"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-12 col-xl-3">
                            <div className="freelance-widget widget-author">
                              <div className="freelance-content">
                                <Link
                                  data-bs-toggle="modal"
                                  to="#rating"
                                  className="favourite favourited"
                                >
                                  <i className="fas fa-star" />
                                </Link>
                                <div className="author-heading">
                                  <div className="profile-img">
                                    <Link to="project-details.html">
                                      <img
                                        src={company_img7}
                                        alt="author"
                                      />
                                      <span className="project-verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="profile-name">
                                    <div className="author-location">
                                      <Link to="project-details.html">Kind Softwares</Link>{" "}
                                    </div>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="#">Network Engineer</Link>
                                    </h3>
                                    <div className="freelance-location post-now mb-1">
                                      <i className="fas fa-clock" /> Posted 3 weeks ago
                                    </div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Delaware, USA
                                    </div>
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
                                  <div className="freelancers-price">$12-$320</div>
                                </div>
                                <div className="counter-stats">
                                  <ul>
                                    <li>
                                      <h5>Expiry</h5>
                                      <h3 className="counter-value">5 Days Left</h3>
                                    </li>
                                    <li>
                                      <h5>Proposals</h5>
                                      <h3 className="counter-value">24</h3>
                                    </li>
                                    <li>
                                      <h5>Job Type</h5>
                                      <h3 className="counter-value">
                                        <span className="jobtype">Full Time</span>
                                      </h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="project-details.html"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-12 col-xl-3">
                            <div className="freelance-widget widget-author">
                              <div className="freelance-content">
                                <Link
                                  data-bs-toggle="modal"
                                  to="#rating"
                                  className="favourite favourited"
                                >
                                  <i className="fas fa-star" />
                                </Link>
                                <div className="author-heading">
                                  <div className="profile-img">
                                    <Link to="project-details.html">
                                      <img
                                        src={company_img8}
                                        alt="author"
                                      />
                                      <span className="project-verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="profile-name">
                                    <div className="author-location">
                                      <Link to="project-details.html">Particles INC </Link>
                                    </div>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="#">Business Analyst</Link>
                                    </h3>
                                    <div className="freelance-location post-now mb-1">
                                      <i className="fas fa-clock" /> Posted 1 month ago
                                    </div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Kentucky, USA
                                    </div>
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
                                  <div className="freelancers-price">$35-$520</div>
                                </div>
                                <div className="counter-stats">
                                  <ul>
                                    <li>
                                      <h5>Expiry</h5>
                                      <h3 className="counter-value">4 Days Left</h3>
                                    </li>
                                    <li>
                                      <h5>Proposals</h5>
                                      <h3 className="counter-value">15</h3>
                                    </li>
                                    <li>
                                      <h5>Job Type</h5>
                                      <h3 className="counter-value">
                                        <span className="jobtype">Full Time</span>
                                      </h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="project-details.html"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-12 col-xl-3">
                            <div className="freelance-widget widget-author">
                              <div className="freelance-content">
                                <Link
                                  data-bs-toggle="modal"
                                  to="#rating"
                                  className="favourite favourited"
                                >
                                  <i className="fas fa-star" />
                                </Link>
                                <div className="author-heading">
                                  <div className="profile-img">
                                    <Link to="project-details.html">
                                      <img
                                        src={company_img9}
                                        alt="author"
                                      />
                                      <span className="project-verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="profile-name">
                                    <div className="author-location">
                                      <Link to="project-details.html">Soft Technologies</Link>{" "}
                                    </div>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="project-details.html">IT Project Manager</Link>
                                    </h3>
                                    <div className="freelance-location post-now mb-1">
                                      <i className="fas fa-clock" /> Posted 2 months ago
                                    </div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Kansas, USA
                                    </div>
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
                                  <div className="freelancers-price">$10-$300</div>
                                </div>
                                <div className="counter-stats">
                                  <ul>
                                    <li>
                                      <h5>Expiry</h5>
                                      <h3 className="counter-value">1 Days Left</h3>
                                    </li>
                                    <li>
                                      <h5>Proposals</h5>
                                      <h3 className="counter-value">12</h3>
                                    </li>
                                    <li>
                                      <h5>Job Type</h5>
                                      <h3 className="counter-value">
                                        <span className="jobtype">Full Time</span>
                                      </h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="project-details.html"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-12 col-xl-3">
                            <div className="freelance-widget widget-author">
                              <div className="freelance-content">
                                <Link
                                  data-bs-toggle="modal"
                                  to="#rating"
                                  className="favourite favourited"
                                >
                                  <i className="fas fa-star" />
                                </Link>
                                <div className="author-heading">
                                  <div className="profile-img">
                                    <Link to="project-details.html">
                                      <img
                                        src={company_img10}
                                        alt="author"
                                      />
                                      <span className="project-verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="profile-name">
                                    <div className="author-location">
                                      <Link to="project-details.html">System Info </Link>
                                    </div>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="#">Software Architect</Link>
                                    </h3>
                                    <div className="freelance-location post-now mb-1">
                                      <i className="fas fa-clock" /> Posted 1 year ago
                                    </div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Minnesota, USA
                                    </div>
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
                                  <div className="freelancers-price">$22-$600</div>
                                </div>
                                <div className="counter-stats">
                                  <ul>
                                    <li>
                                      <h5>Expiry</h5>
                                      <h3 className="counter-value">2 Days Left</h3>
                                    </li>
                                    <li>
                                      <h5>Proposals</h5>
                                      <h3 className="counter-value">10</h3>
                                    </li>
                                    <li>
                                      <h5>Job Type</h5>
                                      <h3 className="counter-value">
                                        <span className="jobtype">Full Time</span>
                                      </h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="project-details.html"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
              {/* /Page Content */}
              {/* /Main Wrapper */}
              {/* The Modal */}
              <div className="modal fade" id="bookmark">
                <div className="modal-dialog modal-dialog-centered modal-md">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">INVITE FREELANCER</h4>
                      <span className="modal-close">
                        <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                          <i className="far fa-times-circle orange-text" />
                        </Link>
                      </span>
                    </div>
                    <div className="modal-body">
                      <form action="#">
                        <div className="modal-info">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="average-bids">
                                <p>
                                  Contact <span className="text-highlight">John Doe </span>{" "}
                                  about your Project
                                </p>
                              </div>
                              <div className="form-group">
                                <label>Invite title</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Send a private message</label>
                                <textarea
                                  className="form-control"
                                  rows={5}
                                  defaultValue={
                                    "Hi  John Doe, I noticed your profile and would like to offer you my project. We can discuss any details over chat."
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Hire for</label>
                                <div className="radio">
                                  <label className="custom_radio">
                                    <input
                                      type="radio"
                                      defaultValue="fix"
                                      name="fix"
                                      defaultChecked=""
                                    />
                                    <span className="checkmark" /> Fixed Price
                                  </label>
                                  <label className="custom_radio">
                                    <input type="radio" defaultValue="fix" name="fix" />
                                    <span className="checkmark" /> Hourly Rate
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Hire for</label>
                                <div className="radio">
                                  <label className="custom_radio">
                                    <input type="radio" defaultValue="fix" name="fix" />
                                    <span className="checkmark" /> Fixed Price
                                  </label>
                                  <label className="custom_radio">
                                    <input type="radio" defaultValue="fix" name="fix" />
                                    <span className="checkmark" /> Hourly Rate
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Budget</label>
                                <div className="form-row">
                                  <div className="col-6">
                                    <div className="input-group">
                                      <div className="input-group-prepend bg-pink">
                                        <span className="input-group-text" id="basic-add">
                                          $
                                        </span>
                                      </div>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={20.0}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <select className="form-control select">
                                      <option value={0}>USD</option>
                                      <option value={0}>USD</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Budget</label>
                                <div className="form-row">
                                  <div className="col-6">
                                    <div className="input-group form-inline">
                                      <div className="input-group-prepend bg-pink">
                                        <span className="input-group-text" id="basic-addon">
                                          $
                                        </span>
                                      </div>
                                      <input
                                        type="text"
                                        className="form-control me-1"
                                        placeholder={20.0}
                                      />{" "}
                                      <label>/ hr</label>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <select className="form-control select">
                                      <option value={0}>USD</option>
                                      <option value={0}>USD</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Project</label>
                                <select className="form-control select">
                                  <option value={0}>
                                    3D Renders and Amazon Product Store images/Video
                                  </option>
                                  <option value={0}>
                                    3D Renders and Amazon Product Store Video
                                  </option>
                                  <option value={0}>
                                    3D Renders and Amazon Product Store images
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="submit-section text-end">
                          <button type="submit" className="btn btn-primary submit-btn">
                            Send Invite
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /The Modal */}
              {/* The Modal */}
              <div className="modal fade" id="rating">
                <div className="modal-dialog modal-dialog-centered modal-md">
                  <div className="modal-content">
                    <div className="modal-header d-block b-0 pb-0">
                      <span className="modal-close float-end">
                        <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                          <i className="far fa-times-circle orange-text" />
                        </Link>
                      </span>
                    </div>
                    <div className="modal-body">
                      <form action="project.html">
                        <div className="modal-info">
                          <div className="text-center pt-0 mb-5">
                            <h3>Please login to Favourite Freelancers</h3>
                          </div>
                          <div className="submit-section text-center">
                            <button
                              data-bs-dismiss="modal"
                              className="btn btn-primary black-btn click-btn"
                            >
                              Cancel
                            </button>
                            <button type="submit" className="btn btn-primary click-btn">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /The Modal */}
              </div>
              </div>
              </div>
              </div>
            </>
            
      )
  
}
      export default FreelancerInvitations;