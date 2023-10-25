import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
//Import images
import {Logo,Img_02,Img_03,Img_04,Img_05 } from "../../imagepath";
  const DeveloperList = (props) => {  
        
    return (
    <>
  <div className="main-wrapper">
    
    {/* Breadcrumb */}
    <div className="bread-crumb-bar">
      <div className="container">
        <div className="row align-items-center inner-banner">
          <div className="col-md-12 col-12 text-center">
            <div className="breadcrumb-list">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <i className="fas fa-home" /> Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Developers
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Page Content */}
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
          <StickyBox offsetTop={20} offsetBottom={20}>
            {/* Search Filter */}
            <div className="card search-filter">
              <div className="card-header d-flex justify-content-between">
                <h4 className="card-title mb-0">FILTERS</h4>
                <Link to="#">Clear All</Link>
              </div>
              <div className="card-body">
                <div className="filter-widget">
                  <h4>Keywords</h4>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Keywords"
                    />
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Location</h4>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Location"
                    />
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Category</h4>
                  <div className="form-group">
                    <select className="form-control select">
                      <option>Select Category</option>
                      <option>Developer</option>
                      <option>UI Developer</option>
                      <option>React Developer</option>
                      <option>.Net Developer</option>
                    </select>
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Completed Projects</h4>
                  <div className="form-group">
                    <select className="form-control select">
                      <option>Select Projects</option>
                      <option>Node Projects</option>
                      <option>UI Projects</option>
                    </select>
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Pricing Type</h4>
                  <div className="form-group">
                    <select className="form-control select">
                      <option>Hourly Rate</option>
                      <option>Full Day Rate</option>
                      <option>Half Day Rate</option>
                    </select>
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Add Skills</h4>
                  <div className="form-group">
                    <span className="badge badge-pill badge-skill">
                      + Web Design
                    </span>
                    <span className="badge badge-pill badge-skill">
                      + UI Design
                    </span>
                    <span className="badge badge-pill badge-skill">
                      + Node Js
                    </span>
                    <span className="badge badge-pill badge-skill">
                      + Angular
                    </span>
                    <span className="badge badge-pill badge-skill">
                      + Wordpress
                    </span>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Avalability</h4>
                  <div>
                    <label className="custom_check">
                      <input
                        type="checkbox"
                        name="select_time"
                        defaultChecked=""
                      />
                      <span className="checkmark" /> Hourly
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="select_time" />
                      <span className="checkmark" /> Part Time
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="select_time" />
                      <span className="checkmark" /> Full Time
                    </label>
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Experience</h4>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" />
                      <span className="checkmark" /> 0-1 years
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input
                        type="checkbox"
                        name="select_exp"
                        defaultChecked=""
                      />
                      <span className="checkmark" /> 2-5 years
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="select_exp" />
                      <span className="checkmark" /> 5-8 years
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="select_exp" />
                      <span className="checkmark" /> 9-12 years
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="select_exp" />
                      <span className="checkmark" /> Mastered
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="select_exp" />
                      <span className="checkmark" /> Professional
                    </label>
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Hourly Rate</h4>
                  <Nouislider range={{ min: 0, max: 50 }} start={[20, 80]} connect />
                  <div id="slider-range" />
                  <div className="row slider-labels">
                    <div className="col-xs-12 caption">
                      <span id="slider-range-value1" />0 -{" "}
                      <span id="slider-range-value2" />50
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <form>
                        <input type="hidden" name="min-value" defaultValue="" />
                        <input type="hidden" name="max-value" defaultValue="" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Currency</h4>
                  <div className="form-group">
                    <select className="form-control select">
                      <option>USD</option>
                      <option>Euro</option>
                    </select>
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Profile type</h4>
                  <div className="form-group">
                    <select className="form-control select">
                      <option>Individual</option>
                      <option>Individual</option>
                      <option>Individual</option>
                    </select>
                  </div>
                </div>
                <div className="filter-widget">
                  <h4>Reviews</h4>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="pro_ratings" />
                      <span className="checkmark" />
                      <span className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">(5)</span>
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="pro_ratings" />
                      <span className="checkmark" />
                      <span className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="far fa-star" />
                        <span className="average-rating">(4)</span>
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="pro_ratings" />
                      <span className="checkmark" />
                      <span className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <span className="average-rating">(6)</span>
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="pro_ratings" />
                      <span className="checkmark" />
                      <span className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <span className="average-rating">(7)</span>
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="custom_check">
                      <input type="checkbox" name="pro_ratings" />
                      <span className="checkmark" />
                      <span className="rating">
                        <i className="fas fa-star filled" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <span className="average-rating">(8)</span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="btn-search">
                  <button type="button" className="btn btn-block">
                    Search
                  </button>
                </div>
              </div>
            </div>
            {/* /Search Filter */}
            </StickyBox>
          </div>
          <div className="col-md-12 col-lg-8 col-xl-9">
            <div className="sort-tab develop-list-select">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="freelance-view">
                      <h4>Showing 1 - 12 of 455</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex">
                  <ul className="list-grid d-flex align-items-center">
                    <li>
                      <Link to="developer">
                        <i className="fas fa-th-large" />
                      </Link>
                    </li>
                    <li>
                      <Link to="developer-list" className="favour-active">
                        <i className="fas fa-list" />
                      </Link>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-sm-end">
                    <div className="sort-by">
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
            </div>
            <div className="list-book-mark book-mark favour-book">
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
                                src={Img_02}
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
                              <Link to="company-profile.html">Akshay Handge</Link>
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
                        <div className="cart-hover">
                          <Link
                            to="company-profile.html"
                            className="btn-cart"
                            tabIndex={-1}
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card list-develop-group">
                    <div className="about-author d-flex align-items-center">
                      <div className="about-list-author d-flex align-items-center">
                        <div className="about-author-img">
                          <div className="author-img-wrap">
                            <Link to="company-profile.html">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Img_03}
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
                              <Link to="company-profile.html">George Wells</Link>
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
                          className="favourite "
                        >
                          <i className="fas fa-star" />
                        </Link>
                        <div className="freelancers-price">$25 Hourly</div>
                        <div className="cart-hover">
                          <Link
                            to="company-profile.html"
                            className="btn-cart"
                            tabIndex={-1}
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card list-develop-group">
                    <div className="about-author d-flex align-items-center">
                      <div className="about-list-author d-flex align-items-center">
                        <div className="about-author-img">
                          <div className="author-img-wrap">
                            <Link to="company-profile.html">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Img_04}
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
                              <Link to="company-profile.html">Richard Wilson</Link>
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
                        <div className="cart-hover">
                          <Link
                            to="company-profile.html"
                            className="btn-cart"
                            tabIndex={-1}
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card list-develop-group">
                    <div className="about-author d-flex align-items-center">
                      <div className="about-list-author d-flex align-items-center">
                        <div className="about-author-img">
                          <div className="author-img-wrap">
                            <Link to="company-profile.html">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Img_05}
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
                              <Link to="company-profile.html">Timothy Smith</Link>
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
                          className="favourite "
                        >
                          <i className="fas fa-star" />
                        </Link>
                        <div className="freelancers-price">$25 Hourly</div>
                        <div className="cart-hover">
                          <Link
                            to="company-profile.html"
                            className="btn-cart"
                            tabIndex={-1}
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card list-develop-group">
                    <div className="about-author d-flex align-items-center">
                      <div className="about-list-author d-flex align-items-center">
                        <div className="about-author-img">
                          <div className="author-img-wrap">
                            <Link to="company-profile.html">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Img_03}
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
                              <Link to="company-profile.html">Akshay Handge</Link>
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
                        <div className="cart-hover">
                          <Link
                           to="company-profile.html"
                            className="btn-cart"
                            tabIndex={-1}
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card list-develop-group">
                    <div className="about-author d-flex align-items-center">
                      <div className="about-list-author d-flex align-items-center">
                        <div className="about-author-img">
                          <div className="author-img-wrap">
                            <Link to="company-profile.html">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Img_02}
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
                              <Link to="company-profile.html">Richard Wilson</Link>
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
                          className="favourite "
                        >
                          <i className="fas fa-star" />
                        </Link>
                        <div className="freelancers-price">$25 Hourly</div>
                        <div className="cart-hover">
                          <Link
                            to="company-profile.html"
                            className="btn-cart"
                            tabIndex={-1}
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card list-develop-group">
                    <div className="about-author d-flex align-items-center">
                      <div className="about-list-author d-flex align-items-center">
                        <div className="about-author-img">
                          <div className="author-img-wrap">
                            <Link to="company-profile.html">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Img_04}
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
                              <Link to="company-profile.html">Timothy Smith</Link>
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
                        <div className="cart-hover">
                          <Link
                            to="company-profile.html"
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
                <div className="row">
                  <div className="col-md-12">
                    <ul className="paginations list-pagination">
                      <li className="page-item">
                        <Link to="#">Previous</Link>
                      </li>
                      <li className="page-item">
                        <Link to="#" className="active">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="#">Next</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
           </div>
         </div>
      </div>
    </div>
    {/* /Page Content */}
    
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
                <h3>Please login to Favourite Freelancer</h3>
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
  {/* /The Modal */}
</>
    )
}
export default DeveloperList;
