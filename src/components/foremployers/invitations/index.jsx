import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Flags_us, Flags_de, Img_01, Img_02, Img_03, Img_04, Img_05, home_icon, Avatar_1, Avatar_2, Avatar_3, Avatar_4, Avatar_5, Avatar_6, Avatar_7, Avatar_8, Avatar_9, Avatar_10, Avatar_11, Avatar_12 } from "../../imagepath";
import { Sidebar } from '../sidebar';

const InvitedFreelancer = (props) => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
      {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="#"><img src={home_icon} alt="Post Author" /> Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page">Employee
                    </li>
                    <li className="breadcrumb-item" aria-current="page">Favourites</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content bookmark content-page">
        <div className="container-fluid">
          <div className="row">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link" to="/favourites">
                      Bookmarked Freelancers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/invited-freelancer">
                      Invited Freelancers
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* project list */}
              <div className="my-projects-view">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-header d-flex">
                        <h5 className="card-title">Invited Freelancers</h5>
                        <ul className="list-grid d-flex align-items-center">
                          <li>
                            <Link to="favourites-list">
                              <i className="fas fa-list" />
                            </Link>
                          </li>
                          <li>
                            <Link to="favourites" className="favour-active">
                              <i className="fas fa-th-large" />
                            </Link>
                          </li>
                        </ul>
                        </div>
                        <div className="freelance-box book-mark favour-book">
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
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_1} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="developer-details.html">George Wells</Link>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">$25 Hourly</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_2} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="developer-details.html">Timothy Smith</Link>
                                    </h3>
                                    <div className="freelance-specific">PHP Developer</div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Illinois, USA
                                    </div>
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star " />
                                      <i className="fas fa-star" />
                                      <span className="average-rating">4.8 (55)</span>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">$21 Hourly</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_3} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="developer-details.html">Janet Paden</Link>
                                    </h3>
                                    <div className="freelance-specific">Graphic Designer</div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      New York, USA
                                    </div>
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star " />
                                      <i className="fas fa-star" />
                                      <span className="average-rating">4.1 (30)</span>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">Free</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_4} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="developer-details.html">James Douglas</Link>
                                    </h3>
                                    <div className="freelance-specific">iOS Developer</div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Florida, USA
                                    </div>
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span className="average-rating">3.2 (22)</span>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">Free</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_5} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="developer-details.html">Floyd Lewis</Link>
                                    </h3>
                                    <div className="freelance-specific">SEO Developer</div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Texas, USA
                                    </div>
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star " />
                                      <i className="fas fa-star" />
                                      <span className="average-rating">4.9 (40)</span>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">$30 Hourly</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_6} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="developer-details.html">Jacqueline Daye</Link>
                                    </h3>
                                    <div className="freelance-specific">SM Developer</div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      California, USA
                                    </div>
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star " />
                                      <i className="fas fa-star" />
                                      <span className="average-rating">4.3 (35)</span>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">$12 Hourly</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_7} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="developer-details.html">Crystal Kemper</Link>
                                    </h3>
                                    <div className="freelance-specific">Network Engineer</div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Maryland, USA
                                    </div>
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span className="average-rating">3.5 (28)</span>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">$20 Hourly</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_8} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="developer-details.html">Tony Ingle</Link>
                                    </h3>
                                    <div className="freelance-specific">Business Analyst</div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Missouri, USA
                                    </div>
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span className="average-rating">2.1 (15)</span>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">Free</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_9} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="developer-details.html">Kathleen Kaiser</Link>
                                    </h3>
                                    <div className="freelance-specific">IT Project Manager</div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Kansas, USA
                                    </div>
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                      <span className="average-rating">4.5 (36)</span>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">$25 Hourly</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_10} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="developer-details.html">Veronica Cheek</Link>
                                    </h3>
                                    <div className="freelance-specific">Software Architect</div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Vermont, USA
                                    </div>
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span className="average-rating">2.3 (20)</span>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">$26 Hourly</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_11} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="#">Andrew Glover</Link>
                                    </h3>
                                    <div className="freelance-specific">Software Developer</div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Virginia, USA
                                    </div>
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                      <span className="average-rating">5.0 (4)</span>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">$8 Hourly</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
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
                                    <Link to="developer-details.html">
                                      <img src={Avatar_12} alt="User Image" />
                                      <span className="verified">
                                        <i className="fas fa-check-circle" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <Link to="developer-details.html">Mickey Bernier</Link>
                                    </h3>
                                    <div className="freelance-specific">QA Engineer</div>
                                    <div className="freelance-location">
                                      <i className="fas fa-map-marker-alt me-1" />
                                      Colorado, USA
                                    </div>
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                      <span className="average-rating">5.0 (4)</span>
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
                                        <span className="badge badge-pill badge-design">Node Js</span>
                                      </Link>
                                    </div>
                                    <div className="freelancers-price">Free</div>
                                  </div>
                                </div>
                                <div className="cart-hover">
                                  <Link to="developer-details.html" className="btn-cart" tabIndex={-1}>
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* project list */}
                        {/* /Page Content */}

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
                                <form action="invited-freelancer.html">
                                  <div className="modal-info">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="average-bids mb-4">
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
                                            <label className="custom_radio me-2">
                                              <input
                                                type="radio"
                                                defaultValue="fix"
                                                defaultChecked=""
                                              />
                                              <span className="checkmark" /> Fixed Price
                                            </label>
                                            <label className="custom_radio">
                                              <input type="radio" defaultValue="fix" />
                                              <span className="checkmark" /> Hourly Rate
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>Hire for</label>
                                          <div className="radio">
                                            <label className="custom_radio me-2">
                                              <input
                                                type="radio"
                                                defaultValue="rate"
                                                defaultChecked=""
                                              />
                                              <span className="checkmark" /> Fixed Price
                                            </label>
                                            <label className="custom_radio">
                                              <input type="radio" defaultValue="rate" />
                                              <span className="checkmark" /> Hourly Rate
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label>Budget</label>
                                          <div className="form-row">
                                            <div className="col-7">
                                              <div className="input-group">
                                                <div className="input-group-prepend bg-pink d-flex">
                                                  <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                  >
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
                                            <div className="col-5">
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
                                            <div className="col-sm-7">
                                              <div className="input-group form-inline mb-2">
                                                <div className="input-group-prepend bg-pink d-flex">
                                                  <span className="input-group-text" id="basic-add">
                                                    $
                                                  </span>
                                                </div>
                                                <input
                                                  type="text"
                                                  className="form-control me-1"
                                                  placeholder={20.0}
                                                />
                                                <label className="invited-freelancer-label">
                                                  / hr
                                                </label>
                                              </div>
                                            </div>
                                            <div className="col-sm-5">
                                              <select className="form-control select form-select">
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
                                          <select className="form-control select form-select">
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
                                      <h3>Please login to Invited Freelancer</h3>
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
                      </div>
                    </div>
                  </div>
                  {/* /The Modal */}
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>


  )

}
export default InvitedFreelancer;